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
    MessageIcon,
    ReelsIcon,
    SearchIcon,
} from '~/components/Fonts';

const cx = classNames.bind(styles);

const NAV_ITEMS = [
    {
        icon: <HomeIcon />,
        title: 'Trang chủ',
    },
    {
        icon: <SearchIcon />,
        title: 'Tìm kiếm',
    },
    {
        icon: <ExploreIcon />,
        title: 'Khám phá',
    },
    {
        icon: <ReelsIcon />,
        title: 'Reels',
    },
    {
        icon: <MessageIcon />,
        title: 'Tin nhắn',
    },
    {
        icon: <HeartIcon />,
        title: 'Thông báo',
    },
    {
        icon: <CreateIcon />,
        title: 'Tạo',
    },
    {
        img: 'https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Trang cá nhân',
    },
    {
        icon: <BarsIcon />,
        title: 'Xem Thêm',
    },
];

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Instagram" />
            </div>
            <div className={cx('actions')}>
                {NAV_ITEMS.map((items, index) => (
                    <NavItem key={index} items={items} />
                ))}
            </div>
            <div className={cx('more-menu')}></div>
        </nav>
    );
}

export default Navbar;
