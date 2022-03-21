import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div>
            <div className="list-group">
                <Link className="list-group-item" to="/">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className={`list-group-item fw-bold ${active === 'home' ? 'active' : ''}`}
                   to="/tuiter/home">
                    <i className="fa-solid fa-house-chimney"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link className={`list-group-item fw-bold ${active === 'explore' ? 'active' : ''}`}
                   to="/tuiter/explore">
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <a href="notifications.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="messages.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a href="bookmarks.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="lists.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-list"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <a href="profile.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-user"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </a>
                <a href="more.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-circle"></i>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>

    );
}
export default NavigationSidebar;
