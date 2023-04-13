import classNames from 'classnames/bind';
import styles from './SidebarStyles.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('info-user')}>
                <div className={cx('info-avt')}>
                    <img
                        src="https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                </div>
                <div className={cx('info-content')}>
                    <h4 className={cx('info-username')}>erauqs102</h4>
                    <p className={cx('info-name')}>Bình Phan</p>
                </div>
                <button className={cx('info-switch')}>Chuyển</button>
            </div>
            <div className={cx('suggestion')}>
                <div className={cx('suggestion-header')}>
                    <h4 className={cx('suggestion-title')}>Gợi ý cho bạn</h4>
                    <a className={cx('suggestion-btn')} href="/">
                        Xem tất cả
                    </a>
                </div>
                <div className={cx('suggestion-content')}>
                    <div className={cx('suggestion-friend')}>
                        <div className={cx('avt')}>
                            <img
                                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/119021151_1388998471269062_6697011022950398502_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8OjR81DCD5gAX_jYWGc&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCrkcHWw7w5QA18_h3nixeqEtOdumuekbZFf7c69lKWaA&oe=645EB514"
                                alt=""
                            />
                        </div>
                        <div className={cx('content')}>
                            <h4 className={cx('username')}>mientay_quetoi</h4>
                            <p className={cx('name')}>Gợi ý cho bạn</p>
                        </div>
                        <button className={cx('follow')}>Theo dõi</button>
                    </div>
                    <div className={cx('suggestion-friend')}>
                        <div className={cx('avt')}>
                            <img
                                alt=""
                                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/336651802_1912486225816432_7005146950624671463_n.jpg?stp=cp6_dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NnjkCthaiu8AX-annxe&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfDq7TX6Lfc4js3LTymTV38GZZ2215if0nntk0Aa5qLP-Q&oe=643BE75C"
                            />
                        </div>
                        <div className={cx('content')}>
                            <h4 className={cx('username')}>dang.long1191</h4>
                            <p className={cx('name')}>Gợi ý cho bạn</p>
                        </div>
                        <button className={cx('follow')}>Theo dõi</button>
                    </div>
                    <div className={cx('suggestion-friend')}>
                        <div className={cx('avt')}>
                            <img
                                src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/332392997_5903026476449135_7811572828407521732_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=TnUBVk0FlnkAX9pspcs&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCXcHs2Mawk4PCkHYuCo8vAxkW6e5inLiAfg_RM80sKyA&oe=643B9714"
                                alt=""
                            />
                        </div>
                        <div className={cx('content')}>
                            <h4 className={cx('username')}>buibichtuyen_94</h4>
                            <p className={cx('name')}>Gợi ý cho bạn</p>
                        </div>
                        <button className={cx('follow')}>Theo dõi</button>
                    </div>
                    <div className={cx('suggestion-friend')}>
                        <div className={cx('avt')}>
                            <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/262377805_448239583327706_6107479547284912792_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=njwwhw_cLEoAX_4ldWu&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfAn4Eodl06WSfX4GWDkVCy721pKMcBWRL3rGJ99oMH1EA&oe=643B32E0"
                                alt=""
                            />
                        </div>
                        <div className={cx('content')}>
                            <h4 className={cx('username')}>_applewatermelon_</h4>
                            <p className={cx('name')}>Gợi ý cho bạn</p>
                        </div>
                        <button className={cx('follow')}>Theo dõi</button>
                    </div>
                    <div className={cx('suggestion-friend')}>
                        <div className={cx('avt')}>
                            <img
                                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-1/95764350_1574199796082961_1452891731480543232_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=v_EMfFtP1BQAX8XnBfT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfDtQ9HsGlYjm-8nRXInVkatjY_BkMKHKpS8dCK2VpySWA&oe=645EB81C"
                                alt=""
                            />
                        </div>
                        <div className={cx('content')}>
                            <h4 className={cx('username')}>bao6404</h4>
                            <p className={cx('name')}>Gợi ý cho bạn</p>
                        </div>
                        <button className={cx('follow')}>Theo dõi</button>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <nav className={cx('nav-list')}>
                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Giới thiệu</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Trợ giúp</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Báo chí</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>API</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Việc làm</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Quyền riêng tư</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span className={cx('title')}>Điều kiện</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span>vị trí</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span>Ngôn ngữ</span>
                    </a>

                    <a className={cx('link')} href="/">
                        <span>Meta dã xác minh</span>
                    </a>
                </nav>
                <p>© 2023 INSTAGRAM FROM META</p>
            </div>
        </div>
    );
}

export default Sidebar;
