import React from "react";
import { useEffect, useState,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { universities } from "../../data";
import { faculties } from "../../data";
import { USER_UPDATE_RESET } from "../../common/constants/userConstants";

const UserEditScreen = (props)  =>{
  const userId = props.match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setUniversity(user.university);
      setFaculty(user.faculty);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(
      updateUser({ _id: userId, name, email, university, faculty, isAdmin })
    );
  };


  return (
    <div>
      <form className="w-[90%] m-[auto] mt-[20px]" onSubmit={submitHandler}>
        <div>
          <h1 className="text-center text-[16px] lg:text-[24px] font-bold">Edit User {name}</h1>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="editFormContainer">
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label className="mt-[15px]" htmlFor="university">
                  University
                </label>
                <select
                  type="text"
                  id="university"
                  className="p-[10px] "
                  placeholder="Enter University"
                  required
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  {universities.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div >
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label className="mt-[15px]" htmlFor="faculty">
                  Faculty
                </label>
                <select
                  type="text"
                  id="faculty"
                  className="p-[10px] "
                  placeholder="Enter Faculty"
                  value={faculty}
                  required
                  onChange={(e) => setFaculty(e.target.value)}
                >
                  {faculties.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="isAdmin">Is Admin</label>
                <input
                  id="isAdmin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                ></input>
              </div>
              <div className="w-[100%]">
                <button className="primary bg-[#0067b1] w-[100%] p-[10px]" type="submit">
                  Update User Information
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default memo(UserEditScreen);
