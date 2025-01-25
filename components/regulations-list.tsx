"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { FC } from "react";
import styles from "./regulations-list.module.css";

interface Regulation {
  id: number;
  text: string;
  details?: string[];
}

interface RegulationListProps {
  regulations: Regulation[];
}

const RegulationList: FC<RegulationListProps> = ({ regulations }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="regulation">
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Regulations</h1>
      </div>
      <div
        className="regulations-content max-w-3xl mx-auto px-4"
        data-aos="zoom-in-down"
      >
        <div className="space-y-6">
          {regulations.map((regulation) => (
            <div key={regulation.id} className="flex items-start gap-4">
              <div className="text-2xl font-bold text-gray-800">
                {String(regulation.id).padStart(2, "0")}
              </div>
              <div>
                <p className=" mt-1 text-lg font-medium text-gray-700">
                  {regulation.text}
                </p>
                {regulation.details && (
                  <ol className={`${styles.alphaList} mt-2 pl-6 text-gray-600`}>
                    {regulation.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulationList;
