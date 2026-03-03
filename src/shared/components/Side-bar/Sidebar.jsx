const menuItems = [
  {
    imageSrc: "/Default_profile_image.png",
    name: "Departamentos",
  },
  {
    imageSrc: "/Default_profile_image.png",
    name: "Recibos",
  },
  {
    imageSrc: "/Default_profile_image.png",
    name: "Ajustes",
  },
];

export default function Sidebar() {
  return (
    <>
      <div className="bg-[#fffeff] h-full p-5 box-border rounded-2xl flex flex-col items-center gap-6">
        {/* Logo and Account */}
        <div className="self-start w-full h-auto">
          <img
            src="/Default_image.png"
            alt="logo"
            className="box-border h-15 w-full"
          />
        </div>
        {/* Account */}
        <div className="w-fit flex flex-row gap-4 items-center p-2 rounded-lg border-gray-300 border-2">
          <img
            src="/Default_profile_image.png"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p>
              Hola, <strong>Nombre</strong>
            </p>
            <p>Correo</p>
          </div>
          <button>v</button>
        </div>
        {/* Navigation buttons */}
        <div className="w-[80%] items-center">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center gap-3 p-4 rounded-lg hover:bg-[#edf7f4] cursor-pointer transition-colors duration-150"
              >
                <img src={item.imageSrc} alt={item.name} className="w-6 h-6" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Copyright */}
        <div className="grow flex flex-col justify-center">
          <strong className="text-s">
            Daykei Invoice Payment for Departments
          </strong>
          <p className="text-xs text-gray-500">Copyright © 2025</p>
        </div>
      </div>
    </>
  );
}
