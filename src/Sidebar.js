import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
    const { user } = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img   src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9ycyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar__stat">
                    <p>Who viewed</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reacjJS')}
                {recentItem('Programming')}
                {recentItem('Design')}
                {recentItem('Firebase')}
                {recentItem('Redux')}
                {recentItem('Linkedin')}
            </div>
        </div>
    );
}

export default Sidebar;