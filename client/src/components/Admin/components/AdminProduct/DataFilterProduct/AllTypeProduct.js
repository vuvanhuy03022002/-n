import React, { useEffect, useState } from "react";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";
import UpdateTypeProduct from "./UpdateTypeProduct";
import { Modal } from 'antd';

export default function AllTypeProduct() {
  const dispatch = useDispatch();
  const { List } = useSelector((state) => state.allTypeProduct);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleRemoveItem = (item) => {
    setShowDeleteModal(true);
    setItemToDelete(item);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deleteTypeProduct(itemToDelete));
    setShowDeleteModal(false);
    setItemToDelete(null);
    dispatch(getAllTypeProduct());
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleUpdateItem = (item) => {
    setSelectedItem(item);
    setIsUpdateMode(true);
  };

  const handleUpdateSuccess = () => {
    setSelectedItem(null);
    setIsUpdateMode(false);
    dispatch(getAllTypeProduct());
  };

  const MenuFirmProduct = (firmItem) => (
    <div className="filter-menu-firm-item" key={firmItem.id}>
      <img src={firmItem.img} alt={firmItem.name} />
      <div className="filter-menu-firm-item-info">
        <p style={{ marginLeft: '10px' }}>{firmItem.name}</p>
        <div className="filter-menu-firm-item-action">
          <span onClick={() => handleUpdateItem(firmItem)}>
            <EditOutlined />
          </span>
          <span className="filter-menu-firm-item-delete" onClick={() => handleRemoveItem(firmItem)}>
            <CloseOutlined />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="filter-menu-firm">
        {List ? List.map((item) => MenuFirmProduct(item)) : ""}
      </div>
      {selectedItem && isUpdateMode && (
        <UpdateTypeProduct item={selectedItem} onUpdate={handleUpdateSuccess} />
      )}
      <Modal
        title="Xác nhận xóa"
        visible={showDeleteModal}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa {itemToDelete?.name}?</p>
      </Modal>
    </div>
  );
}
