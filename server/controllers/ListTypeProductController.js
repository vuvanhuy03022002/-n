import expressAsyncHandler from 'express-async-handler'
import cloudinary from 'cloudinary'
import { ListTypeProductModel } from '../models/ListTypeProductModel.js'

export const getAllTypeProduct = expressAsyncHandler(async (req, res) => {
    const allType = await ListTypeProductModel.find({})
    res.send(allType)
})

export const createNewTypeProduct = expressAsyncHandler(async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "dev_setups",
      });
      console.log("1237",req.file)
    const newType = new ListTypeProductModel({
        name: req.body.name,
        img: result.secure_url,
        cloudinary_id: result.public_id,
    }) 

    await newType.save()
    res.send(newType)
})
export const deleteTypeProduct = expressAsyncHandler(async (req, res) => {
    const typeProduct = await ListTypeProductModel.findById({_id: req.params.id})

    await cloudinary.uploader.destroy(typeProduct.cloudinary_id)

    if(typeProduct){
        await typeProduct.remove()
        res.send({msg: 'deleted type product'})
    }else{
        res.send({msg: 'product not found'})
    }

})
// Update Type Product
export const updateTypeProduct = expressAsyncHandler( async (req, res) => {
  const typeProductId = req.params.id;
  const updatedData = req.body;
  console.log("body", req.body.name);
  try {
    const typeProduct = await ListTypeProductModel.findById(typeProductId);
    console.log(typeProduct);
    if (!typeProduct) {
      return res.status(404).send({ msg: 'Type product not found' });
    }
    // Update other fields from updatedData
    Object.assign(typeProduct, updatedData);

    if (req.file) {
      // If a new file is provided, upload it to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'dev_setups',
      });

      // Update image and cloudinary_id if a new file is provided
      await cloudinary.uploader.destroy(typeProduct.cloudinary_id);
      typeProduct.img = result.secure_url;
      typeProduct.cloudinary_id = result.public_id;
    }

    // Save the updated typeProduct
    await typeProduct.save();

    res.send({ msg: 'Updated type product', typeProduct });
  } catch (error) {
    res.status(500).send({ msg: 'Error updating type product', error });
  }
});