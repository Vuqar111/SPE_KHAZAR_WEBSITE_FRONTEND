import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { USER_DETAILS_RESET } from "../../common/constants/userConstants";

const UserListScreen = (props) => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

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
          <table className="table">
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
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id.slice(0, 6)}</td>
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
        )}
      </div>
    </div>
  );
};

export default memo(UserListScreen);
