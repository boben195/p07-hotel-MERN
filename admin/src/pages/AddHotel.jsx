import React, { useState } from "react";

import default_image from "../assets/upload.jpg";

const AddHotel = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <form className="flex flex-col items-start gap-1">
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="">
              <img
                src={!image ? default_image : URL.createObjectURL(image)}
                alt="your image"
                className="w-32 cursor-pointer"
              />
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Name</p>
          <input
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Description</p>
          <input
            type="text"
            placeholder="Enter enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Price</p>
          <input
            type="number"
            placeholder="40"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-20 py-3 bg-fuchsia-600 rounded text-white"
        >
          Add room
        </button>
      </form>
    </div>
  );
};

export default AddHotel;
