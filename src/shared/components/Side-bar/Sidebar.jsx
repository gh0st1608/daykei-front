const menuItems = [
    {
        imageSrc: "/Default_profile_image.png",
        name: "Departamentos"
    },
    {
        imageSrc: "/Default_profile_image.png",
        name: "Recibos"
    },
    {
        imageSrc: "/Default_profile_image.png",
        name: "Ajustes"
    },
];

export default function Sidebar() {
    return (
        <>
            <div className="bg-[#fffeff] h-full p-5 box-border rounded-2xl flex flex-col items-center">
                {/* Logo and Account */}
                <div className="self-start w-full h-auto">
                    <img src="/Default_image.png" alt="logo" className="box-border h-10 w-full" />
                </div>
                {/* Account */}
                <div className="w-full flex flex-row">
                    <img src="/Default_profile_image.png" alt="profile" className="w-12 h-12 rounded-full" />
                    <div>
                        <h3>Hola, <strong>Name</strong></h3>
                        <h4>Correo</h4>
                    </div>
                    <button>Boton</button>
                </div>
                {/* Navigation buttons */}
                <div>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="flex flex-row items-center gap-2 p-2 rounded-lg hover:bg-[#f4f5f4] cursor-pointer">
                                <img src={item.imageSrc} alt={item.name} className="w-6 h-6" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Copyright */}
                <div className="">
                    <p>Daykei Invoice Payment for Departments</p>
                    <p>Copyright © 2025</p>
                </div>
            </div>
        </>
    );
}