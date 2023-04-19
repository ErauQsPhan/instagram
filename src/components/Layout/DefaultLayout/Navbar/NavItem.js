import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const NavItem = ({ items }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={cx('nav-item', isActive ? 'active' : '', items.className)}
        >
            {items.img ? (
                <img className={cx('avatar')} src={items.img} alt="avatar" />
            ) : (
                <div className={cx('icon')}>{items.icon}</div>
            )}
            <span className={cx('title')}>{items.title}</span>
        </div>
    );
};

export default NavItem;
