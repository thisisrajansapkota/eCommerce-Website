import React from 'react'
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { Link } from 'react-router-dom';

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
  return (
    <div>
      <Form className="login-form mt-3 mb-3 border p-4 rounded shadow">
        {inputFields.map((field) => {
          return <CustomInput key={field.label} {...field} />;
        })}

        {/*Better to map items!  */}
        {/* <CustomInput label={"email"} type="password" /> */}

        <Button variant="primary" type="submit">
          Login
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