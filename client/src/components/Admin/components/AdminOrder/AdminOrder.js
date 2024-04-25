import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOrder from "./AdminOrderUI/ListOrder";
import { Pagination } from 'antd';
import './AdminOrder.css';
import { getAllOrder } from "../../../../actions/OrderAction";

function AdminOrderAll(props) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrder.order);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; 

  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentOrders = orders ? orders.slice(indexOfFirstOrder, indexOfLastOrder) : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admin-order">
      <div className="admin-order-order">
         <span>Đơn Hàng</span>
      </div>
      {currentOrders.length > 0 ? (
        <>
          <ListOrder orders={currentOrders} />
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={orders ? orders.length : 0} 
            pageSize={ordersPerPage}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <h4>Không có đơn hàng</h4>
      )}
    </div>
  );
}

export default AdminOrderAll;
