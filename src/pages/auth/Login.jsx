import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/layout/BaseLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminAction } from "../../redux/auth/userAction";

function Login() {
  const inputFields = [
    {
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "sam@abc.com",
      required: true,
    },
  
    {
      label: "Password *",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
      minLength: 6,
    },
  ];

const dispatch = useDispatch();
const navigate = useNavigate();

const [formData, setFormData] = useState({});
const {user}  = useSelector (state => state.userInfo)
useEffect(() => {
  //if user object changes, meaning, user is logged in, redirect 
  if (user?.uid){
navigate('/dashboard')
  }
}, [user]);

const handleOnChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleOnSubmit = (e) => {
  e.preventDefault();
  //Firebase call for Login 
  const {email, password} = formData;
  dispatch(loginAdminAction (email, password));

};

  return (
    <BaseLayout>
      <div>
        <Form
          onSubmit={handleOnSubmit}
          className="login-form mt-3 mb-3 border p-4 rounded shadow"
        >
          {inputFields.map((field) => {
            return (
              <CustomInput
                key={field.label}
                {...field}
                onChange={handleOnChange}
              />
            );
          })}

          {/*Better to map items!  */}
          {/* <CustomInput label={"email"} type="password" /> */}

          <Button variant="primary" type="submit">
            Login
          </Button>

          <div>
            Forgot Password?
            <Link to="/forget-password">Click here</Link>
          </div>
        </Form>
      </div>
    </BaseLayout>
  );
}

export default Login;


//34:44///////////////////////// 