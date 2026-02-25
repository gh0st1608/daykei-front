import Sidebar from "../Side-bar/Sidebar";

export default function Layout() {
    return (
        <>
            <div className="flex flex-row bg-[#f4f5f4] h-screen">
                <div className="basis-2/9 mx-3 my-1 p-3">
                    <Sidebar />
                </div>
                <div className="basis-7/9 p-3">
                    <h1>Nav-bar</h1>
                    <h2>Content</h2>
                </div>
            </div>
        </>
    );
}