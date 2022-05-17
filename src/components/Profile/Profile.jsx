import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={classes.content}>

            <ProfileInfo/>


            <MyPostsContainer
                store={props.store}
            />

        </div>
    )
}

export default Profile;