import React from 'react';
import profile from "./profile.jpg";

const ProfilePhoto = () => {
    return ( <div>
        <img src={profile} alt="profile" className="photo"/>
    </div> );
}
 
export default ProfilePhoto;