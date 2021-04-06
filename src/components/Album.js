import React from 'react';
import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }

    return (
        <div className="album">
            <li onClick={handleSelectAlbum}>
                <div className="album-title">
                    {props.album.title}
                </div>
            </li>
        </div>
    );
}

export default Album;