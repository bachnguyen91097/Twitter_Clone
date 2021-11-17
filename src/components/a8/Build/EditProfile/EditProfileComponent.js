import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./EditProfile.css";
import "../Profile/profile.css";
import {updateCurrentProfile} from "../../../../services/profileService";

const selectProfile = (state)=> state.profile;

const EditProfileComponent = ({setEditMode}) => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    const [newName, setName] = useState(profile.name);
    const [newBio, setBio] = useState(profile.bio);
    const [newLocation, setLocation] = useState(profile.location);
    const [newWebsite, setWebsite] = useState(profile.website);
    const [newBirthdate, setBirthdate] = useState(profile.dateOfBirth);

    const newProfile = {
        ...profile,
        name: newName,
        bio: newBio,
        location: newLocation,
        website: newWebsite,
        dateOfBirth: newBirthdate
    }

    const updateProfileHandler = () => {
        updateCurrentProfile(dispatch, newProfile);
        setEditMode(false);
    }


    return (
        <>
            <div className="row">
                <div className="col-1">
                    <button className = "wd-back-button" onClick = {() => setEditMode(false)}>
                        <i className = "fas fa-times fa-inverse"></i>
                    </button>
                </div>
                <div className="col-11">
                    <div className="row wd-username">
                        Edit Profile
                    </div>
                    <button  className="rounded-pill wd-save-button" onClick={updateProfileHandler}>
                        Save
                    </button>
                </div>
            </div>
            <div className="row ">
                <img src={profile.bannerPicture} className="wd-banner-image"/>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={profile.profilePicture} className="wd-profile-pic"/>
                </div>
            </div>
            <form className="form-floating">
                <input id="name" placeholder="Add your name" value={newName}  onChange={(event) => setName(event.target.value)}  className="form-control"/>
                <label for="name">Name</label>
            </form>
            <br/>
            <form className="form-floating">
                <textarea id="bio" placeholder="Add a bio to your profile" value={newBio}
                       onChange={(event) => setBio(event.target.value)} className="form-control overflow-hidden"/>
                <label htmlFor="bio">Bio</label>
            </form>
            <br/>
            <form className="form-floating">
                <input id="location" placeholder="Add your location" value={newLocation}
                       onChange={(event) => setLocation(event.target.value)} className="form-control"/>
                <label htmlFor="location">Location</label>
            </form>
            <br/>
            <form className="form-floating">
                <input id="website" placeholder="Add your website" value={newWebsite}
                       onChange={(event) => setWebsite(event.target.value)} className="form-control"/>
                <label htmlFor="website">Website</label>
            </form>
            <br/>
            <form className="form-floating">
                <input id="DOB" placeholder="Add your day of birth" value={newBirthdate}
                       onChange={(event) => setBirthdate(event.target.value)} className="form-control"/>
                <label htmlFor="DOB">Birth date</label>
            </form>
            <br/>
        </>
    );
}

export default EditProfileComponent