import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./DataFilterProduct.css";
import { updateTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";

const UpdateTypeProduct = ({ item, onUpdate }) => {
  const dispatch = useDispatch();
  const { handleSubmit, register, setValue } = useForm();
  const [image, setImage] = useState("");

  // Set the initial form values when the component mounts
  useEffect(() => {
    if (item) {
      setValue("name", item.name);
      setValue("image", ""); // Clear the image value to prevent unintentional file uploads
    }
  }, [item, setValue]);

  const onUpdateLocal = async (data, e) => {
    e.preventDefault();
    
    // Use FormData to handle file uploads
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image);

    // Dispatch the update action
    // await dispatch(updateTypeProduct({ _id: item._id, ...data, image }));
    await dispatch(updateTypeProduct(item._id, formData));

    // Notify the parent component of the update
    onUpdate();

    // Fetch the updated data  
    dispatch(getAllTypeProduct());
  };

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="update-type">
      <span>Sửa Danh Mục</span>
      <form onSubmit={handleSubmit(onUpdateLocal)}>
        {/* Input to update the name */}
        <input {...register("name")} placeholder="New Name ... " />

        {/* Input to update the image */}
        <input
          type="file"
          {...register("image")}
          onChange={handleFileImageChange}
        />

        {/* Button to submit the form and update the type product */}
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default UpdateTypeProduct;