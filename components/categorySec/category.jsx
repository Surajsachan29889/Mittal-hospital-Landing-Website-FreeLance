import React from "react";
import Card from "./Card";
// import pediatrics from "../../public/pediatrics.png";
// import OBGYN from "../../public/OB-GYN.png";
// import generalmedicine from "../../public/generalmedicine.png";

function Category() {
  return (
    <div className="lg:h-[120vh] h-[200vh] flex justify-center items-center px-[2rem]">
      <div className="flex flex-col gap-11 justify-center items-center h-[60%]">
        <h1 className="lg:text-[3vw] text-[5vw] font-extrabold"><span className="text-pri">Expert</span> Care Nationwide</h1>
        <h2 className="w-[50%] text-center lg:block hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          voluptate non explicabo praesentium necessitatibus facilis architecto?
          Odit magnam reiciendis ab excepturi ad exercitationem, quibusdam modi
        </h2>
        <div className="flex  lg:flex-row flex-col lg:gap-[10%] gap-[7vh] lg:h-full h-[100vh] w-full justify-center items-center">
          <Card
            image="/pediatrics.png"
            title="Pediatrics"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
          <Card
            image="/OB-gyn.png"
            title="OB-GYN"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
          <Card
            image="/generalmedicine.png"
            title="General Medicine"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
