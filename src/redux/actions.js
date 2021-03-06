export const loadAlbums = () => {
    return dispatch => {
        dispatch({ type: 'albums/load/start' });

        fetch('https://jsonplaceholder.typicode.com/albums/?_limit=20')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'albums/load/success',
                    payload: json
                });
            });
    }
}

export const loadPhotos = () => {
    return dispatch => {
        dispatch({ type: 'photos/load/start' });

        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=1000')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'photos/load/success',
                    payload:json
                });
            });
    }
}

export const selectAlbum = (albumId) => {
    return {
        type: 'albums/select',
        payload: albumId
    }
}