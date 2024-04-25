import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const reviewProduct = new Schema({
  name: {type: String},
  comment: {type: String},
  star: {type: Number},
},{
  timestamps: true,
})


const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    type: { type: String, required: true },
    image: { type: String },
    favorite: { type: Boolean, default: false },
    amount: Number,
    cloudinary_id: { type: String },

    rating: { type: Number },
    numReviews: { type: Number },
    blog: String,

    reviews: [reviewProduct],

 },
  {
    timestamps: true,
  }
);
Product.index({name: 'text'});

export const ProductModel = mongoose.model("Product", Product)