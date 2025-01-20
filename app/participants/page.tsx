import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import developer from "@/public/images/developer.jpg";
import developer2 from "@/public/images/developer2.jpg";
import mathsmatician from "@/public/images/mathsmatician.webp";

const ParticipantsPage: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Participants</h1>
      </div>

      <div>
        <Tabs
          defaultValue="account"
          className="w-[400px] mx-auto  p-4 rounded-lg "
        >
          <TabsList>
            <TabsTrigger value="uzb">Uzbekistan</TabsTrigger>
            <TabsTrigger value="usa">USA</TabsTrigger>
            <TabsTrigger value="rus">Russia</TabsTrigger>
            <TabsTrigger value="eng">England</TabsTrigger>
          </TabsList>
          <TabsContent
            value="uzb"
            className="flex justify-around gap-4 items-center"
          >
            <div className="flex flex-col items-center min-w-[200px]">
              <Image
                className="rounded-full"
                alt="developer"
                width={150}
                height={150}
                src={developer2}
              />
              <h1>Botirov Aziz</h1>
              <p>Tutor</p>
            </div>

            <div className="flex flex-col items-center min-w-[200px]">
              <Image
                className="rounded-full"
                alt="developer"
                width={150}
                height={150}
                src={developer}
              />
              <h1>Qodirov Asror</h1>
              <p>Contestant</p>
            </div>

            <div className="flex flex-col items-center min-w-[200px]">
              <Image
                className="rounded-full"
                alt="mathsmatician"
                width={150}
                height={150}
                src={mathsmatician}
              />
              <h1>Mansurov Akbar</h1>
              <p>Student</p>
            </div>

          </TabsContent>
          <TabsContent value="usa" className="flex flex-col items-center">
            <Image
              className="rounded"
              alt="developer"
              width={150}
              height={150}
              src={developer}
            />
            <h1>John Doe</h1>
            <p>Olympiad 2</p>
          </TabsContent>
          <TabsContent value="rus" className="flex flex-col items-center">
            <Image
              className="rounded"
              alt="developer"
              width={150}
              height={150}
              src={developer}
            />
            <h1>Ivan Ivanov</h1>
            <p>Olympiad 3</p>
          </TabsContent>
          <TabsContent value="eng" className="flex flex-col items-center">
            <Image
              className="rounded"
              alt="developer"
              width={150}
              height={150}
              src={developer}
            />
            <h1>John Smith</h1>
            <p>Olympiad 4</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ParticipantsPage;
