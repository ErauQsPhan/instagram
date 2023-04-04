import HomePage from '~/components/pages/Home';
import ExplorePage from '~/components/pages/Explore';
import ReelsPage from '~/components/pages/Reels';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/explore', component: ExplorePage },
    { path: '/reels', component: ReelsPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
