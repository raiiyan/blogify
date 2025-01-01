import { ConnectDB } from "../../../../lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { BlogModel } from "../../../../lib/models/BlogModel";

// Connect to the database
const LoadDB = async () => {
  try {
    await ConnectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
LoadDB();


// api endpoint to get all blogs
export async function GET(request) {

  const blogId = request.nextUrl.searchParams.get("id");

  if(blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }
  else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({blogs});
  }

}


// api endpoint to add a new blog
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    // Process and save the uploaded image
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const filePath = `./public/uploads/${timestamp}_${image.name}`;
    await writeFile(filePath, buffer);
    const imgUrl = `/uploads/${timestamp}_${image.name}`;

    // Prepare blog data for the database
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    // Save to the database
    const blog = await BlogModel.create(blogData);
    console.log("Blog saved successfully:", blog);

    return NextResponse.json({
      success: true,
      message: "Blog added successfully",
    });
  } 
  catch (error) {
    console.error("Error in POST /api/blog:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to add blog" },
      { status: 500 }
    );
  }
}