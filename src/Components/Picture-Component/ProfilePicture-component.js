import React from "react";
import Pic from "../../imgs/profileImg.png"
import "./ProfilePicture-component.css"

function ProfilePicture({ data, width }) {
    return <>
        <img className="profilePictureStyle" src={data ? `data:image;base64${data}` : `${Pic}`} width={width} />
    </>
}

export default ProfilePicture;