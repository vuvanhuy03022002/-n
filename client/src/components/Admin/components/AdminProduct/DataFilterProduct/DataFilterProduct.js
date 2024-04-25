import React from "react";
import "./DataFilterProduct.css";

import CreateNewType from "./CreateNewType";

import AllTypeProduct from "./AllTypeProduct";

export default function DataFilterProduct() {
  

  return (
    <div className="update-filter">
      <div className="update-filter-title">
        <span>Danh Mục</span>
      </div>
      <AllTypeProduct></AllTypeProduct>

      <CreateNewType></CreateNewType>
    </div>
  );
}
