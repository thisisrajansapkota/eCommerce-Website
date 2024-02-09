import React from "react";
import BaseLayout from "../../components/layout/BaseLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";

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


  return (
    <BaseLayout>
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
            Forgot Password?
            <Link to="/forget-password">Click here</Link>
          </div>
        </Form>
      </div>
    </BaseLayout>
  );
}

export default Login;
