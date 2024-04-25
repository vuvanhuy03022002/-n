import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUser } from '../../../../actions/UserAction';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

function User(props) {
  const { user, number } = props;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleDeleteUser = async () => {
    if (userIdToDelete) {
      await dispatch(deleteUser(userIdToDelete));
      dispatch(getAllUser());
    }
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  const showModal = (userId) => {
    setModalVisible(true);
    setUserIdToDelete(userId);
  };

  const isAdminValue = user.isAdmin ? 'Admin' : 'User';

  return (
    <tr>
      <td>{number + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{isAdminValue}</td>
      <td className="update-user">
        <Link to={`/admin/user/detail/${user._id}`}>
          <EditOutlined />
        </Link>
      </td>
      <td className="delete-user">
        {isAdminValue === 'User' && ( 
          <span onClick={() => showModal(user._id)}>
            <DeleteOutlined />
          </span>
        )}
      </td>
      <Modal
        title="Xác nhận xóa"
        visible={modalVisible}
        onOk={handleDeleteUser}
        onCancel={handleCancelDelete}
        okText="Xóa"
        cancelText="Không"
      >
        Bạn có chắc chắn muốn xóa người dùng này không?
      </Modal>
    </tr>
  );
}

export default User;
