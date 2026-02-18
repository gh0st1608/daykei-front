import "./Layout.css";

export default function Layout() {
    return (
        <>
            <div className="layout">
                <div className="sidebar">
                    <h1>Sidebar</h1>
                </div>
                <div className="maincontent">
                    <h1>Nav-bar</h1>
                    <h2>Content</h2>
                </div>
            </div>
        </>
    );
}