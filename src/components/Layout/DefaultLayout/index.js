import Header from '~/components/Layout/DefaultLayout/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
