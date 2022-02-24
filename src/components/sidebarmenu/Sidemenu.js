import React from 'react'
import { NavLink } from 'react-router-dom';
import './sidemenu.css';
import Twitter from '../../svgs/twitter.svg';
import HomeSvg from '../../svgs/HomeSvg';
import NotificationSvg from '../../svgs/NotificationSvg';
import HashtagSvg from '../../svgs/HashtagSvg';
import ProfileSvg from '../../svgs/ProfileSvg';
import MessageSvg from '../../svgs/MessageSvg';
import BookmarkSvg from '../../svgs/BookmarkSvg';
import MoreSvg from '../../svgs/MoreSvg';
import Feather from '../../svgs/feather.svg';
import UserMenu from '../usermenu/UserMenu';
const Sidemenu = () => {
  return (
    <div className="sidemenu">
        <ul className="menu-list">
            <li className="list-item logo">
                <NavLink to="/">
                    <img src={Twitter} alt="twitter-bird"/>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <HomeSvg/>
                    <span>Home</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <NotificationSvg/>
                    <span>Notification</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                   <HashtagSvg/>
                   <span>Explore</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <ProfileSvg/>
                    <span>Profile</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <MessageSvg/>
                    <span>Messages</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <BookmarkSvg/>
                    <span>Bookmark</span>
                </NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/">
                    <MoreSvg/>
                    <span>More</span>
                </NavLink>
            </li>
            <li className="list-item">
                <button type='button'>
                    <img src={Feather} alt="feather" />
                   <span>Tweet</span>
                </button>
            </li>
        </ul>
        {/* <div className="user-data">
            <img src={Person} alt="person"/>
            <div className="user-name">
                <span>Mark Spenser</span>
                <span>@mark.spenser18</span>
            </div>
        </div> */}
        <UserMenu/>
    </div>
  )
}

export default Sidemenu;