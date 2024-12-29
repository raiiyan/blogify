import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://raiyanh255:FWu4ikOyLKlQh1eN@cluster0.nccir.mongodb.net/blogify')
    console.log('DB Connected');
}
