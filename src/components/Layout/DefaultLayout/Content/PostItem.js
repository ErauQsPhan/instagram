import classNames from 'classnames/bind';
import styles from './PostItemStyles.module.scss';
import { CommentIcon, EllipsisIcon, EmojiIcon, HeartIcon, SaveIcon, ShareIcon } from '~/components/Fonts';

const cx = classNames.bind(styles);
function PostItem({ items }) {
    console.log(items);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-user')}>
                    <div className={cx('avatar')}>
                        <img src={items.avatar} alt="avatar" />
                    </div>
                    <div className={cx('header-title')}>
                        <span className={cx('username')}>{items.username}</span>
                        <span className={cx('dot-separate')}>•</span>
                        <span className={cx('time')}>{items.time}</span>
                    </div>
                </div>
                <div className={cx('header-more')}>
                    <EllipsisIcon />
                </div>
            </div>
            <div className={cx('image')}>
                <img src={items.imagePost} alt="asf" />
            </div>
            <div className={cx('footer')}>
                <div className={cx('actions')}>
                    <div className={cx('actions-left')}>
                        <span className={cx('icon')}>
                            <HeartIcon />
                        </span>
                        <span className={cx('icon')}>
                            <CommentIcon />
                        </span>
                        <span className={cx('icon')}>
                            <ShareIcon />
                        </span>
                    </div>
                    <span className={cx('icon', 'actions-right')}>
                        <SaveIcon />
                    </span>
                </div>
                <div className={cx('like')}>
                    <span className={cx('numb')}>{items.numberLikes}</span>
                    <span>lượt thích</span>
                </div>
                <div className={cx('user-comment')}>
                    <span className={cx('username')}>{items.username}</span>
                    <span className={cx('comment')}>{items.CommentsUser}</span>
                </div>
                <div className={cx('comments')}>
                    {items.comments.map((comment, index) => (
                        <div key={index} className={cx('comment-wrapper')}>
                            <div>
                                <span className={cx('username')}>{comment.user}</span>
                                <span className={cx('content')}>{comment.comment}</span>
                            </div>
                            <div className={cx('small-heart')}>
                                <HeartIcon />
                            </div>
                        </div>
                    ))}
                </div>
                <form className={cx('add-comment')} action="">
                    <input placeholder="Thêm bình luận"></input>
                    <div className={cx('action-left')}>
                        <button>Đăng</button>
                        <EmojiIcon />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostItem;
