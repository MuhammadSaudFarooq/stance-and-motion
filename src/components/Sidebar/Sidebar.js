import './Sidebar.css';
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLinks = [
        {
            title: 'Dashboard',
            slug: '/',
            icon: '/images/dashboard-icon.png'
        },
        {
            title: 'User Management',
            slug: '/user-management',
            icon: '/images/user-management-icon.png'
        },
        {
            title: 'Team Management',
            slug: '/team-management',
            icon: '/images/team-management-icon.png'
        },
        {
            title: 'Payment Management',
            slug: '/payment-management',
            icon: '/images/payment-management-icon.png'
        },
        {
            title: 'Subscription Management',
            slug: '/subscription-management',
            icon: '/images/subscription-management-icon.png'
        },
        {
            title: 'Audio Management',
            slug: '/audio-management',
            icon: '/images/audio-management-icon.png'
        },
        {
            title: 'Video Management',
            slug: '/video-management',
            icon: '/images/video-management-icon.png'
        },
        {
            title: 'Control Management',
            slug: '/control-management',
            icon: '/images/control-management-icon.png'
        },
        {
            title: 'Settings',
            slug: '/settings',
            icon: '/images/settings-icon.png'
        },
    ];

    return (
        <aside id="sidebar">
            <ul>

                {
                    navLinks.map(
                        (item, index) =>
                            <li key={index}>
                                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.slug}>
                                    <img src={process.env.PUBLIC_URL + item.icon} alt="" />
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                    )
                }


            </ul>
        </aside>
    )
}

export default Sidebar;