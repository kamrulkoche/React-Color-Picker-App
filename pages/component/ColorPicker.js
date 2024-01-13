// src/components/ColorPicker.js
import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-center pt-8 pb-8 ">
        <div className="w-96 h-96"
          style={{
            backgroundColor: selectedColor,
           
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center pb-8 ">
        <input 
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
          className="w-48 h-10"
        />
      </div>

      <p className="text-center text-lg ">Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
