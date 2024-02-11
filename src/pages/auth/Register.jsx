import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../../components/customInput/CustomInput";
import BaseLayout from "../../components/layout/BaseLayout";
import { createAdminAction } from "../../redux/auth/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const inputFields = [
    {
      label: "First Name *",
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name *",
      name: "lName",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "sam@abc.com",
      required: true,
    },
    {
      label: "Phone number",
      name: "phone",
      type: "number",
      placeholder: "0412569874",
    },
    {
      label: "Password *",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
      minLength: 6,
    },
    {
      label: "Confirm Password *",
      name: "confirmPassword",
      type: "password",
      placeholder: "*********",
      required: true,
      minLength: 6,
    },
  ];

  //calling dispatch
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: "admin"
    //Default role Admin.
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    //PREVENTS PAGE FROM REFRESHING
    e.preventDefault();

    //VALIDATION ON FORM DATA
    // PW AND CONFIRM PW MATCHES
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      toast.error("Passwords didn't match!");
      return;
    }
    //Now, Integrate to FIREBASE SERVICES:
    //AUTH & DB (in a separate file for ease.)
    dispatch(createAdminAction(formData));

// passing formData to createAdminAction.
//What does dispatch do in Redux?
//dispatch(action)​ Dispatches an action. This is the only way to trigger a state change.
  };

  return (
    <BaseLayout title={"Register"}>
      <div>
        <Form
          onSubmit={handleOnSubmit}
          className="login-form mt-3 mb-3 border p-4 rounded shadow-lg"
        >
          {inputFields.map(field => {
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
            Register
          </Button>
        </Form>
      </div>
    </BaseLayout>
  )
}

export default Register;


//time stamp: 45:52 (second vid)
// github ukiras see project: fix api key error message