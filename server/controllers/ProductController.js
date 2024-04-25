import {ProductModel} from '../models/ProductModel.js'
import expressAsyncHandler from 'express-async-handler'
import { PinComment } from '../untils/until.js'
import cloudinary from 'cloudinary'


export const getAllProduct = expressAsyncHandler(async (req, res) => {
    // await ProductModel.remove()
    // const product = await ProductModel.insertMany(data.products)
    // ProductModel.find()
    //     .then(product => res.send(product))
    //     .catch(err => console.log(err))
     const products = await ProductModel.find({})
     res.send(products)
})


export const findProductById = expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById({_id: req.params.id})
    
    if(product){
        res.send(product)
    }else{
        res.send({message: 'product not found'})
    }
})

export const filterProductByType =  expressAsyncHandler(async (req, res) => {
    // ProductModel.find({type: req.params.type})
    //     .then(product => res.send(product))
    //     .catch(err => console.log(err))

    const filterProductByType = await ProductModel.find({type: req.params.type}).limit(5)
    res.send(filterProductByType)
})

export const filterProductByRandomField = expressAsyncHandler(async (req, res) => {
    const products = await ProductModel.find(req.body)
    if(products){
        res.send(products)
    }else{
        res.send({message: 'product not found'})
    }
})
export const AddProduct = expressAsyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "dev_setups",
  });

  const product = new ProductModel({
    name: req.body.name,
    price: req.body.price,
    salePrice: req.body.salePrice,
    amount: req.body.amount,
    type: req.body.type || '',
    image: result.secure_url,
    cloudinary_id: result.public_id,
    rating: 0,
    size: req.body.size,
    favorite: req.body.favorite,
  });
  const newProduct = await product.save();

  if (newProduct) {
    return res
      .status(201)
      .send({ message: "New Product Created", data: newProduct });
  } else {
    res.send("error add product");
  }
});

export const UpdateProduct = expressAsyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.body._id);

  await cloudinary.uploader.destroy(product.cloudinary_id);

  let result;
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path);
  }

  if (product) {
    product.name = req.body.name;
    product.amount = req.body.amount;
    product.price = req.body.price;
    product.salePrice = req.body.salePrice;
    product.type = req.body.type;
    product.size = req.body.size;
    product.image = result?.secure_url || product.image;
    product.rating = 0;
    product.cloulinary_id = result?.public_id || product.cloudinary_id;
    product.favorite = req.body.favorite || product.favorite;

    const updateProduct = await product.save();
    if (updateProduct) {
      res.send("update success");
    }
  }
return res.send("update fail");
});

export const DeleteProduct = expressAsyncHandler(async (req, res) => {
    const deleteProduct = await ProductModel.findById(req.params.id)

    // await cloudinary.uploader.destroy(deleteProduct.cloudinary_id);

    if(deleteProduct){
        await deleteProduct.remove()
        res.send({message: 'product deleted'})
    } else{
        res.send('error in deletetion')
    }
})


export const paginationProduct = expressAsyncHandler(async (req, res) => {
    var perPage = 4
    var page = req.params.page || 1
    ProductModel
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, products) {
            ProductModel.countDocuments().exec(function(err, count) {
                if (err) return next(err)
                res.send({
                    products: products,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
})

export const RateProduct = expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id)
    if(product){
        const existsUser = product.reviews.find(x => x.name === req.body.name)
        if(existsUser){
            res.send({message: 'ban da danh gia san pham nay'})
        }else{
            product.reviews.push(req.body)
            const updateProduct = await product.save()
            res.send(updateProduct)
        }
        
    }else{
        res.status(400).send({message: 'product not found'})
    }

})


export const BlogProduct = expressAsyncHandler(async (req, res) => {
const product = await ProductModel.findById({_id: req.params.id})
    
    if(product){
        product.blog = req.body.blogContent
        await product.save()
        res.send(product)
    }else{
        res.send({message: 'product not found'})
    }
})


export const getProductsSalePrice = async (req, res) => {
    try {
        const productsWithSamePrice = await ProductModel.aggregate([
            {
                $match: {
                    $expr: { $ne: ["$salePrice", "$price"] }
                }
            }
        ]);
        res.json(productsWithSamePrice);
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllReviewProducts = async (req, res) => {
    try {
      // Lấy tất cả các sản phẩm và đánh giá của chúng
      const products = await ProductModel.find({}).populate('reviews');
  
      if (!products) {
        return res.status(404).json({ message: 'Không tìm thấy bất kỳ sản phẩm nào.' });
      }
  
      let allReviews = [];
      products.forEach(product => {
        if (product.reviews && product.reviews.length > 0) {
          product.reviews.forEach(review => {
            // Tạo đối tượng mới chứa thông tin sản phẩm và đánh giá
            const reviewWithProductInfo = {
              productId: product._id,
              productName: product.name,
              productImage: product.image,
              // Thêm thông tin đánh giá vào đây
              reviewId: review._id,
              reviewName: review.name,
              reviewStar: review.star,
              reviewComment: review.comment,
              reviewCreatedAt: review.createdAt,
              // Thêm các thông tin khác nếu cần
            };
            allReviews.push(reviewWithProductInfo);
          });
        }
      });
  
      res.status(200).json(allReviews);
    } catch (error) {
      res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy đánh giá sản phẩm.', error: error.message });
    }
  };
  


export const deleteReview = async (req, res) => {
    try {
      const { productId, reviewId } = req.params;
  
      // Tìm sản phẩm trong cơ sở dữ liệu dựa trên productId
      const product = await ProductModel.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
  
      // Tìm đánh giá cần xóa trong mảng reviews của sản phẩm
      const reviewIndex = product.reviews.findIndex((r) => r._id.toString() === reviewId);
  
      if (reviewIndex === -1) {
        return res.status(404).json({ message: 'Đánh giá không tồn tại' });
      }
  
      // Xóa đánh giá khỏi mảng reviews của sản phẩm
      product.reviews.splice(reviewIndex, 1);
  
      // Lưu sản phẩm đã được cập nhật (đã xóa đánh giá) vào cơ sở dữ liệu
      const updatedProduct = await product.save();
  
      return res.status(200).json({ message: 'Đã xóa đánh giá', product: updatedProduct });
    } catch (error) {
      return res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa đánh giá', error: error.message });
    }
  };