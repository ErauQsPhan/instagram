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
                                src="https://images.unsplash.com/photo-1681502014934-b70a5ff05bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
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
                                src="https://images.unsplash.com/photo-1681412327205-af22c0849ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
                                src="https://images.unsplash.com/photo-1681404141874-633aa2de7c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
                                src="https://images.unsplash.com/photo-1681605449196-ebc9c2df94e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
