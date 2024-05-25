import React from "react";
import Card from "./categorySec/Card";
// import pediatrics from "../../public/pediatrics.png";
// import OBGYN from "../../public/OB-GYN.png";
// import generalmedicine from "../../public/generalmedicine.png";

function Category() {
  return (
    <div className="lg:h-[120vh] h-[170vh] flex justify-center items-center px-[2rem]" id="service">
      <div className="flex flex-col lg:gap-10 justify-center items-center lg:h-[60%]">
        <h1 className="lg:text-[3vw] h-[40vh] text-[6vw] font-extrabold"><span className="text-pri">Expert</span> Care Nationwide</h1>
        <h2 className="w-[50%] text-center h-[50vh] lg:block hidden lg:pb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          voluptate non explicabo praesentium necessitatibus facilis architecto?
          Odit magnam reiciendis ab excepturi ad exercitationem, quibusdam modi
        </h2>
        <div className="flex  lg:flex-row flex-col lg:gap-[10%] gap-[7vh] lg:h-full h-[100vh] w-full justify-center items-center">
          <Card
            image="/pediatrics.png"
            span="P"
            title="ediatrics"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
          <Card
            image="/OB-gyn.png"
            span="OB"
            title="-GYN"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
          <Card
            image="/generalmedicine.png"
            span="General"
            title=" Medicine"
            para=
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate non explicabo praesentium necessitatibus facilis architecto?"
            
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
