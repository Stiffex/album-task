const initialState = {
    selectedAlbumId: null,
    albums: [],
    photos: [],

    loadingAlbums: false,
    loadingPhotos: false
}

export const reducer = (state = initialState, action) => {
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

        case 'photos/load/start' :
            return {
                ...state,
                loadingPhotos: true
            }

        case 'photos/load/success' :
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }



        default:
            return state;
    }
}