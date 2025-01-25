import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";

export default function Problems() {
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Problems</h1>
      </div>

      <div className="mx-auto mt-8 w-[60%]">
        {/* Problem Rows */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 bg-gray-100 rounded-lg ">
          <h1 className="text-[20px]">
            Alxorazmiy 2024 yil olimpiadada tushgan masalalar to`plami
          </h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 mt-4 bg-gray-100 rounded-lg ">
          <h1 className="text-[20px]">
            Alxorazmiy 2023 yil olimpiadada tushgan masalalar to`plami
          </h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-8 w-[60%]">
        {/* Problem Rows */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 bg-gray-100 rounded-lg ">
          <h1 className="text-[20px]">Problems (Official)</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 mt-4 bg-gray-100 rounded-lg ">
          <h1 className="text-[20px]">Solutions</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-8 p-4 bg-gray-100 rounded-lg w-[60%] mb-6">
        {/* Country Rows */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 m-4">
          <h1 className="text-[20px]">Ukraine</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 m-4 mt-4">
          <h1 className="text-[20px]">Uzbekistan</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 m-4 mt-4">
          <h1 className="text-[20px]">Russia</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 m-4 mt-4">
          <h1 className="text-[20px]">Germany</h1>
          <Button
            variant="secondary"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Download <FaDownload className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
