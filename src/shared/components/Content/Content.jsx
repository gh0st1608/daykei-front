export default function Content() {
  return (
    <>
      <div className="flex flex-col gap-2 p-4">
        <section className="shadow-xl rounded-xl flex flex-col py-5 bg-[#feffff] font-inter">
          <div className="flex justify-between px-7 py-6">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-light">ID de Pago</p>
              <h2 className="text-3xl font-bold">#123456</h2>
            </div>
            <div className="flex flex-row items-end gap-5">
              <div className="flex flex-row gap-3">
                <img src="/Default_profile_image.png" className="w-6 h-6" />
                <div className="flex flex-col">
                  <p className="text-xs">Telefono</p>
                  <h3 className="text-md font-bold text-[#56768b]">
                    +51 987654321
                  </h3>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img src="/Default_profile_image.png" className="w-6 h-6" />
                <div className="flex flex-col">
                  <p className="text-xs">Correo</p>
                  <h3 className="text-md font-bold text-[#56768b]">
                    ejemplo@correo.com
                  </h3>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <button className="rounded-xl cursor-pointer flex flex-row items-center gap-2 px-3 py-2 bg-[#f3f2f2] text-[#a8adb1]">
                  <img src="/Default_profile_image.png" className="w-5 h-5" />
                  Imprimir
                </button>
                <button className="rounded-xl cursor-pointer flex flex-row items-center gap-2 px-3 py-2 bg-[#59cec7] text-white">
                  <img
                    src="/Default_profile_image.png"
                    className="w-5 h-5 invert"
                  />
                  Descargar reporte
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row justify-between px-7 py-6">
            <div className="flex flex-row gap-3">
              <img src="Default_image.png" className="w-25 h-25" />
              <div className="flex flex-col justify-center">
                <h2>Nombre y Apellido</h2>
                <p>Red social</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="self-center">
                <p className="text-xs">Metodo de pago</p>
                <p className="text-md">(Metodo de pago)</p>
              </div>
              <div className="self-center">
                <p className="text-xs">Fecha del recibo</p>
                <p className="text-md">(Fecha del recibo)</p>
              </div>
              <div className="self-center">
                <p className="text-xs">Fecha limite</p>
                <p className="text-md">(Fecha limite)</p>
              </div>
            </div>
            <div className="bg-[#fcf4e1] flex items-center gap-4 p-4 rounded-xl">
              <div className="bg-[#ff7520] w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold">
                S/.
              </div>
              <div>
                <p className="text-sm text-gray-500">Cantidad</p>
                <p className="text-2xl font-semibold">S/. 12345</p>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </>
  );
}
