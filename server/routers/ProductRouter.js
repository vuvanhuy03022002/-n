import express from 'express'
import {
  getAllProduct,
  filterProductByType,
  findProductById,
  AddProduct,
  DeleteProduct,
  UpdateProduct,
  paginationProduct,
  RateProduct,
  BlogProduct,
  filterProductByRandomField,
  getProductsSalePrice,
  getAllReviewProducts,
  deleteReview
} from "../controllers/ProductController.js";
import { isAuth, isAdmin } from "../untils/until.js";
import { upload } from "../untils/until.js";

const ProductRouter = express.Router();

ProductRouter.get("/:type", filterProductByType);
ProductRouter.post("/filter/random", filterProductByRandomField);
ProductRouter.get("/detail/:id", findProductById);
ProductRouter.get("/", getAllProduct);
ProductRouter.get(`/pagination/:page`, paginationProduct);
ProductRouter.get("/filter/productsale", getProductsSalePrice);

ProductRouter.get("/filter/review", getAllReviewProducts);

ProductRouter.post("/rate/:id", RateProduct);
ProductRouter.delete("/delete/review/:productId/:reviewId", deleteReview);

ProductRouter.post(
  "/create",
  // isAuth,
  // isAdmin,
  upload.single("image"),
  AddProduct
);
ProductRouter.put(
  "/update",
  // isAuth,
  // isAdmin,
  upload.single("image"),
  UpdateProduct
);
ProductRouter.post(
  "/blog/:id",
  // isAuth,
  // isAdmin,
  BlogProduct
);
ProductRouter.delete(
  "/delete/:id",
  // isAuth,
  // isAdmin,
  upload.single("image"),
  DeleteProduct
);

export default ProductRouter