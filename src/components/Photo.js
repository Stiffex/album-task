import React from 'react';

function Photo(props) {
    return (
        <div>
            <li className="photo">
                <img src={props.photo.thumbnailUrl} alt="picture"/>
            </li>
        </div>
    );
}

export default Photo;