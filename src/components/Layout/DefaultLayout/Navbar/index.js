import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import images from '~/assets/images';
import NavItem from './NavItem';
import {
    BarsIcon,
    CreateIcon,
    ExploreIcon,
    HeartIcon,
    HomeIcon,
    InstagramIcon,
    MessageIcon,
    ReelsIcon,
    SearchIcon,
} from '~/components/Fonts';

const cx = classNames.bind(styles);

const NAV_ITEMS = [
    {
        icon: <HomeIcon />,
        title: 'Trang chủ',
        className: 'home-icon',
    },
    {
        icon: <SearchIcon />,
        title: 'Tìm kiếm',
        className: 'search-icon',
    },
    {
        icon: <ExploreIcon />,
        title: 'Khám phá',
        className: 'explore-icon',
    },
    {
        icon: <ReelsIcon />,
        title: 'Reels',
        className: 'reels-icon',
    },
    {
        icon: <MessageIcon />,
        title: 'Tin nhắn',
        className: 'message-icon',
    },
    {
        icon: <HeartIcon />,
        title: 'Thông báo',
        className: 'heart-icon',
    },
    {
        icon: <CreateIcon />,
        title: 'Tạo',
        className: 'create-icon',
    },
    {
        img: 'https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Trang cá nhân',
        className: 'user-icon',
    },
    {
        icon: <BarsIcon />,
        title: 'Xem Thêm',
        className: 'bars-icon',
    },
];

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Instagram" />
                <InstagramIcon />
            </div>
            <div className={cx('actions')}>
                {NAV_ITEMS.map((items, index) => (
                    <NavItem key={index} items={items} />
                ))}
            </div>
            <div className={cx('navbar-right')}>
                <div className={cx('search-box')}>
                    <SearchIcon />
                    <input placeholder="Tìm kiếm" />
                </div>
                <div className={cx('notify')}>
                    <HeartIcon />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
