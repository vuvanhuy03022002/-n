import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  editCurrentPage,
  saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory } from "react-router-dom";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState("");
  const [activeTypeProduct, setActiveTypeproduct] = useState("");
  const { pages } = useSelector((state) => state.allProduct.product);
  const { List } = useSelector((state) => state.allTypeProduct);



  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    let formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("amount", data.amount);
    formData.append("salePrice", data.salePrice);
    formData.append("type", activeTypeProduct);
    formData.append("image", image);
    formData.append("favorite", data.favorite || false);

    await dispatch(saveProduct(formData));
    await dispatch(editCurrentPage(pages));
    history.push("/admin/product");
  };

  const MenuFirmProduct = (item) => (
    <div
      className={
        activeTypeProduct === item.name
          ? `filter-menu-firm-item active`
          : "filter-menu-firm-item"
      }
      onClick={() => HandleFilterProductByType(item.name)}
    >
      <img src={item.img}></img>
      <p style={{marginLeft:'10px'}}>{item.name}</p>
    </div>
  );

  const HandleFilterProductByType = (name) => {
    setActiveTypeproduct(name);
  };

  return (
    <div className="admin-create">
      <span>Thêm sản phẩm</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <input {...register("name")} placeholder="Tên sản phẩm"></input>
        <input
          {...register("amount")}
          placeholder="Amount"
          type="number"
        ></input>
        <input {...register("price")} placeholder="Giá" type="number"></input>
        <input
          {...register("salePrice")}
          placeholder="Giảm giá còn"
          type="number"
        ></input>
        <input
          type="checkbox"
          {...register("favorite")}
        />
        <label style={{marginRight:'98px', paddingBottom:'10px'}}>Yêu thích</label>
        <div className="filter-menu-firm">
          {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          }
        </div>

        <input
          type="file"
          {...register("image")}
          onChange={handleFileImageChange}
        ></input>
          <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default AdminCreate;