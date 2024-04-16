import './Header.css';
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from "antd";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const items = [
        {
            label: (
                <Link to="/logout">Logout</Link>
            ),
            key: '0',
        }
    ];
    return (
        <header id="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Stance & Motion" />
                </NavLink>
            </div>
            <div className="user-nav">
                <span className="user-img">
                    <img src={process.env.PUBLIC_URL + '/images/user.png'} alt="User" />
                </span>
                <span className="user-name">Henry</span>
                <span className="user-dropdown">
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Space>
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                </span>
            </div>
        </header>
    )
}

export default Header;