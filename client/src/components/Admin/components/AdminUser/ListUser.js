import React, { useState } from 'react';
import User from './User';
import { Pagination } from 'antd';

function ListUser(props) {
    const { users } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5; // Số người dùng trên mỗi trang

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
        <div className="admin-user-list">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>SDT</th>
                        <th>Role</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((item, index) => (
                        <User user={item} number={index} key={index} />
                    ))}
                </tbody>
            </table>
            
        </div>
        <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={users.length} // Tổng số người dùng
        pageSize={usersPerPage}
        onChange={handlePageChange}
    />
    </>
    );
}

export default ListUser;
