import classNames from 'classnames/bind';

import Navbar from '~/components/Layout/DefaultLayout/Navbar';
import styles from './DefaultLayout.module.scss';
import Content from './Content';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('container')}>
                <Content>{children}</Content>
                <Sidebar />
            </div>
        </div>
    );
}

export default DefaultLayout;
