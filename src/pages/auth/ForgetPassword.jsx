import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordAction } from '../../redux/auth/userAction';

function ForgetPassword() {
    const inputFields = [
      {
        label: "Email *",
        name: "email",
        type: "email",
        placeholder: "sam@abc.com",
        required: true,
      },
    ];

const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

       const handleOnSubmit = (e) => {
         e.preventDefault();
 //Firebase call for Reset Password
const {email} = formData;
 dispatch(resetPasswordAction(email));
       };


  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="login-form mt-3 mb-3 border p-4 rounded shadow">
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
          Reset Password
        </Button>

        <div>
         Need to login?
          <Link to="/login">Click here</Link>
        </div>
      </Form>
    </div>
  );
}

export default ForgetPassword