const initialState = {
    selectedAlbumId: null,
    albums: [],

    loadingAlbums: false,
}

export const albums = (state = initialState, action) => {
    switch(action.type) {

        case 'albums/load/start' :
            return {
                ...state,
                loadingAlbums: true
            }

        case 'albums/load/success' :
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }

        case 'albums/select' :
            return {
                ...state,
                selectedAlbumId: action.payload
            }
        default:
            return state;
    }
}