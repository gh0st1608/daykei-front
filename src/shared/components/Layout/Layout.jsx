import Navbar from "../Nav-bar/Nav-bar";
import Sidebar from "../Side-bar/Sidebar";
import Content from "../Content/Content";

export default function Layout() {
  return (
    <>
      <div className="flex flex-row bg-[#f4f5f4] h-screen gap-2">
        <div className="basis-2/9 my-1 p-3">
          <Sidebar />
        </div>
        <div className="basis-7/9 p-3 flex flex-col">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
}
