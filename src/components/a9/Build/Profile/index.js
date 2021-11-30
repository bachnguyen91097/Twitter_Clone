import React, {useState} from "react";
import ProfileItem from "./Profile";
import EditProfileComponent from "../EditProfile/EditProfileComponent";


const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div>
            {editMode && <EditProfileComponent setEditMode={setEditMode}/>}
            {!editMode && <ProfileItem setEditMode={setEditMode}/>}
        </div>
    );
}
export default Profile;