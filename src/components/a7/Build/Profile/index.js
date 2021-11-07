import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./Profile";
import EditProfileComponent from "../EditProfile/EditProfileComponent";


// const selectProfile = (state)=> state.profile;

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    // const profile = useSelector(selectProfile);
    return (
        <div>
            {editMode && <EditProfileComponent setEditMode={setEditMode}/>}
            {!editMode && <ProfileItem setEditMode={setEditMode}/>}
        </div>

        // <ProfileItem profile = {profile}/>
    );
}
export default Profile;