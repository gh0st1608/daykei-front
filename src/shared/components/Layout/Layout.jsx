import "./Layout.css";

export default function Layout() {
    return (
        <>
            <div className="flex flex-row min-h-screen min-w-screen">
                <div className="basis-1/6">
                    <h1>Sidebar</h1>
                </div>
                <div className="basis-5/6">
                    <h1>Nav-bar</h1>
                    <h2>Content</h2>
                </div>
            </div>
        </>
    );
}