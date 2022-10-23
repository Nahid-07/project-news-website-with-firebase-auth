import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContex/UserContext";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateProfileUser, varify } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        navigate("/");
        profile(name, photoUrl);
        varify();
        toast.success("Here is your toast.");
      })
      .catch((e) => console.log(e));
  };
  const handleAcceptCondition = (event) => {
    setAccepted(event.target.checked);
  };
  const profile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    updateProfileUser(profile).then(() => {});
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name </Form.Label>
        <Form.Control name="name" type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Your photoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAcceptCondition}
          type="checkbox"
          label="Accept terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
