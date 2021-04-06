import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const selectedAlbumId = useSelector(state => state.selectedAlbumId);

    const filtredPhotos = photos.filter((photo) => {
        if(photo.albumId === selectedAlbumId) {
            return true;
        }

        return false;
    })

    if(selectedAlbumId === null) {
        return (
            <div className="no-user-selected">
                ◀Пожалуйста, выберите альбом из этого списка.
            </div>
        )
    }

    return (
        <div className="photos">
            <ul>
                {filtredPhotos.map((photo) => {
                    return <Photo photo={photo} key={photo.id} />
                })}
            </ul>
        </div>
    );
}

export default Photos;