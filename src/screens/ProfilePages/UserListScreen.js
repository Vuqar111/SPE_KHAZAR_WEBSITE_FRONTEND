import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { USER_DETAILS_RESET } from "../../common/constants/userConstants";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const UserListScreen = (props) => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const [id, setId] = useState("");
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div style={{ minHeight: "60vh" }}>
      <div className="row">
        <div className="w-[100%] lg:w-[90%] mx-[auto]  flex flex-col">
          <div className="mt-[30px] border-[2px] border-solid border-[#0067b1] outline-none">
          <input
          placeholder="Type  ID to search"
            className="w-[100%] outline-none"
            type="text"
            onChange={(e) => setId(e.target.value)}
          />
          </div>
          
          <div className="w-[100%] pt-[20px]">
         <ReactHTMLTableToExcel
         className="bg-[#0067B1]  text-[white] w-[100%] h-[50px]"
         table="userTable"
         fileName="UserList"
         sheet="Sheet"
         buttonText="Export to Excel"/>
          </div>
        </div>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        {successDelete && (
          <MessageBox variant="success">User Deleted Successfully</MessageBox>
        )}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="tableMode">
            <table className="table" id="userTable">
            <thead className="tableHeader">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>UNIVERSITY</th>
                <th>FACULTY</th>
                <th>IS ADMIN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {users
                .filter((val) => {
                  if (id === 0) {
                    return val;
                  } else if (val._id.toLowerCase().includes(id.toLowerCase())) {
                    return val;
                  }
                })
                .map((user) => (
                  <tr key={user._id}>
                    <td>{user._id.substr(user._id.length - 6)}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.university}</td>
                    <td>{user.faculty}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                    <td>
                      <button
                        type="button"
                        className="small edit"
                        onClick={() =>
                          props.history.push(`/user/${user._id}/edit`)
                        }
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="small delete"
                        onClick={() => deleteHandler(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(UserListScreen);
