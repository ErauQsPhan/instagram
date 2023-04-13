import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const NavItem = ({ items }) => {
    return (
        <div className={cx('nav-item')}>
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
