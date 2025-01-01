"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/app/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "select",
    author: "Alex Bennett",
    authorImg: "/authorImg.png",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          title: "",
          description: "",
          category: "select",
          author: "Alex Bennett",
          authorImg: "/authorImg.png",
        });
        setImage(false);
      } 
      else {
        toast.error(response.data.message);
      }
    } 
    catch (error) {
      console.error(
        "Error adding blog:",
        error.response?.data || error.message
      );
      toast.error("Failed to add blog. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4 rounded"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={160}
          height={70}
          alt="Upload Thumbnail"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />

      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded"
        placeholder="Write content here"
        rows={6}
        required
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-auto sm:w-[500px] mt-4 px-4 py-3 border text-gray-500 rounded"
        required
      >
        <option value="select">Select</option>
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white rounded">
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;