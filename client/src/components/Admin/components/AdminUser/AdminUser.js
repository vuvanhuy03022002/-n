import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../actions/UserAction';
import ListUser from './ListUser';
import './AdminUser.css'
import { AppstoreAddOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            <span></span>
            <Link to="/admin/user/create" className="add-product">
              <div className='vv'>
              <AppstoreAddOutlined />
               <p>Người Dùng</p>
              </div>
            </Link>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> Loading</h2>)
            }
        </div>
    );
}

export default AdminUser;