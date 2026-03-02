import "./nav-bar.css";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row justify-between">
                <div className="self-end">
                    <h1 className="text-4xl font-bold">Titulo</h1>
                </div>
                <div className="w-max bg-[#f3f2f3] rounded-xl flex flex-row justify-center px-2 py-3">
                    <input className="placeholder:font-inter" placeholder="Buscar"></input>
                    <svg className="self-center" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="6.5" y1="16.5" x2="3" y2="20" />
                    </svg>
                </div>
                <div className="flex">
                    <ul className="nav-bar flex flex-row items-center justify-evenly gap-4 self-center">
                        <li>
                            <img src="/Default_image.png" className="w-8 h-8"></img>
                        </li>
                        <li>
                            <img src="/Default_image.png" className="w-8 h-8"></img>
                        </li>
                        <li>
                            <img src="/Default_image.png" className="w-8 h-8"></img>
                        </li>
                        <li>
                            <img src="/Default_image.png" className="w-8 h-8"></img>
                        </li>
                        <li className="flex flex-row items-center gap-3 bg-[#59cec7] py-3 px-4 text-white text-xs rounded-xl font-inter">
                            <button>Generar reporte</button>
                            <img src="/Default_image.png" className="w-4 h-4 invert"></img>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}