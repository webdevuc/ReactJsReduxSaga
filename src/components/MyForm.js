import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER,  } from "../redux/types";

const MyForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const handleSubmit = () => {
  
       dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
   
    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };
  return (
    <>
      <>
        <div className="form">
          <Input
            style={{ margin: "10px" }}
            onChange={handleChange("name")}
            placeholder="Enter Name"
            value={user.name}
            fullWidth
          />
          <Input
            style={{ margin: "10px" }}
            onChange={handleChange("email")}
            placeholder="Enter Email"
            value={user.email}
            fullWidth
          />

          <Button
            style={{ margin: "10px" }}
            onClick={() => handleSubmit()}
            fullWidth
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </>
    </>
  );
};
export default MyForm;
