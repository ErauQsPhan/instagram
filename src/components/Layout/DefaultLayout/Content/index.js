import PostItem from './PostItem';
import classNames from 'classnames/bind';
import styles from './ContentStyles.module.scss';

const cx = classNames.bind(styles);

const POSTS = [
    {
        id: 1,
        username: 'b.l_anh',
        time: '4 tuần',
        avatar: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XzLYScG__bQAX_wB5dc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfATzI3WrSfgzPDsQKTFxpTPBqyCHVlSR-taKNfLDBhQkQ&oe=6456BB7B',
        imagePost:
            'https://images.unsplash.com/photo-1606163898426-17652048c548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        numberLikes: 5,
        commentsUser: '☁️',
        comments: [
            { user: 'tonarrr', comment: 'Ơ chị =)))' },
            { user: 'b.l_anh', comment: '@tonarrr bất ngờ dị em 😂' },
        ],
    },
    {
        id: 2,
        username: 'b.l_anh',
        time: '14 tuần',
        avatar: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XzLYScG__bQAX_wB5dc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfATzI3WrSfgzPDsQKTFxpTPBqyCHVlSR-taKNfLDBhQkQ&oe=6456BB7B',
        imagePost:
            'https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
        numberLikes: 4,
        commentsUser: '🌫',
        comments: [],
    },
    {
        id: 3,
        username: 'b.l_anh',
        time: '57 tuần',
        avatar: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XzLYScG__bQAX_wB5dc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfATzI3WrSfgzPDsQKTFxpTPBqyCHVlSR-taKNfLDBhQkQ&oe=6456BB7B',
        imagePost:
            'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        numberLikes: 7,
        commentsUser: '⛅️',
        comments: [],
    },
];

function Content() {
    return (
        <div className={cx('content')}>
            {POSTS.map((post) => (
                <PostItem key={post.id} items={post} />
            ))}
        </div>
    );
}

export default Content;
