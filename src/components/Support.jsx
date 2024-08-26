import React from "react";
import img1 from "../assets/spon1.jpg";
import img2 from "../assets/spon2.jpg";
import img3 from "../assets/spon3.jpg";
import img4 from "../assets/spon4.jpg";
import img5 from "../assets/spon5.jpg";
import img6 from "../assets/spon6.jpg";
import img7 from "../assets/spon7.jpg";
import img8 from "../assets/spon8.jpg";

const Support = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 place-items-center">
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] object-contain"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Support;
