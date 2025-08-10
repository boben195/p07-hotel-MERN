import React, { useState } from "react";

import default_image from "../assets/upload.jpg";

const AddHotel = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <form>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="">
              <img
                src={!image ? default_image : URL.createObjectURL(image)}
                alt="your image"
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
        <div>
          <p>Room Name</p>
          <input
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Room Description</p>
          <input
            type="text"
            placeholder="Enter enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Room Price</p>
          <input
            type="number"
            placeholder="40"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Add room</button>
      </form>
    </div>
  );
};

export default AddHotel;
