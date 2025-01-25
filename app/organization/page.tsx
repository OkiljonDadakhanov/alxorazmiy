import CardList from "@/components/ui/card";
import React from "react";

function Organization() {
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Organization</h1>
      </div>

      <div className="organizing__team text-center  mb-8">
        <h2 className="text-5xl">Scientific Committee (Mathematics)</h2>
      </div>
      <CardList />
     
    </section>
  );
}

export default Organization;
