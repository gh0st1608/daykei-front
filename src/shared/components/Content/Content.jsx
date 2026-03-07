import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dataJson from "./data.json";
import React from "react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "ID del Recibo",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Fecha",
    cell: (info) => {
      const rawDate = info.getValue();
      const date = new Date(rawDate);
      return date.toLocaleDateString("es-PE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  }),
  columnHelper.accessor("name", {
    header: "Nombre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Monto",
    cell: (info) => `S/. ${info.getValue()}`,
  }),
  columnHelper.accessor("status", {
    header: "Estado",
    cell: (info) => (
      <div
        className={`rounded-xl flex px-3 py-1 justify-center h-8 font-bold ${
          info.getValue() === "Completado"
            ? "bg-[#dbffda] text-[#87ea84]"
            : info.getValue() === "Pendiente"
              ? "bg-[#f0f0f0] text-[#b7bbbe]"
              : "bg-[#fee8ea] text-[#fe7878]"
        }`}
      >
        {info.getValue()}
      </div>
    ),
  }),
];

export default function Content() {
  const [data] = React.useState(() => [...dataJson]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex flex-1 flex-col gap-2 p-4 h-max">
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
        <section className="flex items-center h-full w-full font-inter">
          <div className="bg-white shadow-md rounded-3xl w-full p-2">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="px-6 py-4">
                        <div className="flex self-start">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
