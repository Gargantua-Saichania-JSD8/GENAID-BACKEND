import express from "express";
import cors from "cors";
import "dotenv/config";
// Uncomment and test these as needed
import connectDB from "./config/mongodb.js";

import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoute.js";


const app = express();
const port = process.env.PORT || 4000;


connectDB();
connectCloudinary();



// Middleware to parse JSON
app.use(express.json());

app.use(
  cors()
);

// API routes
app.use("/api/products", productRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
// Uncomment the below routes when ready
// app.use("/api/user", userRouter);

// app.use("/api/product", productRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("API is Working");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🌐`);
});
