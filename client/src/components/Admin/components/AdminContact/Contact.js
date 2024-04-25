import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact } from '../../../../actions/ContactAction'; // Import the appropriate action file
import './Contact.css';
import { Pagination } from 'antd';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.allContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  useEffect(() => {

    dispatch(getAllContact());
  }, [dispatch]);


  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='contact'>
      <h2>Danh Sách Liên Hệ</h2>
      <div className="contantview">
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Nội dung</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name_contact}</td>
                <td>{contact.email_contact}</td>
                <td>{contact.phone_contact}</td>
                <td>{contact.address_contact}</td>
                <td>{contact.content_contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          style={{ marginTop: '20px' }}
          defaultCurrent={1}
          current={currentPage}
          total={contacts.length} 
          pageSize={contactsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ContactList;
