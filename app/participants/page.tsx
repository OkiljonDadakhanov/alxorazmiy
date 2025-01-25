import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import profile from "@/public/images/profile.png";

const ParticipantsPage: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Participants</h1>
      </div>

      <div>
        <Tabs
          defaultValue="uzb"
          className="w-full max-w-screen-lg mx-auto p-4 rounded-lg"
        >
          <TabsList className="flex justify-center mb-8 space-x-8">
            <TabsTrigger
              value="uzb"
              className="px-6 py-2 rounded-md text-lg font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Uzbekistan
            </TabsTrigger>
            <TabsTrigger
              value="usa"
              className="px-6 py-2 rounded-md text-lg font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              USA
            </TabsTrigger>
            <TabsTrigger
              value="rus"
              className="px-6 py-2 rounded-md text-lg font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Russia
            </TabsTrigger>
            <TabsTrigger
              value="eng"
              className="px-6 py-2 rounded-md text-lg font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              England
            </TabsTrigger>
          </TabsList>

          {/* Uzbekistan Tab Content */}
          <TabsContent value="uzb" className="grid grid-cols-3 gap-8 p-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full"
                alt="Botirov Aziz"
                width={150}
                height={150}
                src={profile}
              />
              <h2 className="text-xl font-semibold">Participant 1</h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full"
                alt="Qodirov Asror"
                width={150}
                height={150}
                src={profile}
              />
              <h2 className="text-xl font-semibold">Participant 2</h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full"
                alt="Mansurov Akbar"
                width={150}
                height={150}
                src={profile}
              />
              <h2 className="text-xl font-semibold">Participant 3</h2>
            </div>
          </TabsContent>

          {/* USA Tab Content */}
          <TabsContent value="usa" className="grid grid-cols-3 gap-8 p-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full"
                alt="Mansurov Akbar"
                width={150}
                height={150}
                src={profile}
              />
              <h2 className="text-xl font-semibold">Participant 1</h2>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full"
                alt="John Doe"
                width={150}
                height={150}
                src={profile}
              />
              <h2 className="text-xl font-semibold">Participant 2</h2>
            </div>
          </TabsContent>

          {/* Russia Tab Content */}
          <TabsContent
            value="rus"
            className="flex flex-col items-center space-y-4"
          >
            <Image
              className="rounded-full"
              alt="Ivan Ivanov"
              width={150}
              height={150}
              src={profile}
            />
            <h2 className="text-xl font-semibold">Participant 1</h2>
          </TabsContent>

          {/* England Tab Content */}
          <TabsContent
            value="eng"
            className="flex flex-col items-center space-y-4"
          >
            <Image
              className="rounded-full"
              alt="John Smith"
              width={150}
              height={150}
              src={profile}
            />
            <h2 className="text-xl font-semibold">Participant 1</h2>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ParticipantsPage;
