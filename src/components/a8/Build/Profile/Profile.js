import React, {useEffect} from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../../services/profileService";

const selectProfile = (state) => state.profile;

const ProfileItem = ({setEditMode}) => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), []);
    return (
        <>
            <div className="row">
                <div className="col-1">
                    <button className = "wd-back-button">
                        <i className = "fas fa-arrow-left fa-inverse"></i>
                    </button>
                </div>
                <div className="col-11">
                    <div className="row wd-username">
                        {profile.name}
                    </div>
                    <div className="row wd-number-of-tweets">
                        {profile.numberTweets} Tweets
                    </div>
                </div>
            </div>
            <div className="row ">
                <img src={profile.bannerPicture} className="wd-banner-image"/>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={profile.profilePicture} className="wd-profile-pic"/>
                    <div className="wd-username-2">
                        {profile.name}
                    </div>
                    <div className="wd-handle">
                        @{profile.handle}
                    </div>
                </div>
                <div className="col-8">

                <button  className="wd-edit-btn rounded-pill" onClick={() => setEditMode(true)}>
                    Edit profile
                </button>

                </div>
            </div>
            <div className="wd-bio">
                {profile.bio}
            </div>
            <div className="row wd-location-time">
                <div className="col-2">
                <i className="fas fa-map-marker-alt"></i> {profile.location}
                </div>
                <div className="col-3">
                    <i className="fas fa-birthday-cake"></i> Born {profile.dateOfBirth}
                </div>
                <div className="col-3 float-left">
                <i className="far fa-calendar-alt"></i> Joined {profile.dateJoined}
                </div>
            </div>
            <div className="row wd-follow">
                <div className="col-2">
                    <span className="wd-follow-font">{profile.followingCount}</span> Following
                </div>
                <div className="col-3 float-left">
                    <span className="wd-follow-font">{profile.followersCount}</span> Followers
                </div>
            </div>

        </>
    );
}

export default ProfileItem;