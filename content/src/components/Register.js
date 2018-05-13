import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";
import "./css/Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Container className="register">
          <div className="form_register">
          <Form >
          <h5 id="signup">Sign Up</h5>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="exmail"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Password</Label>
              <Input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </FormGroup>
          </Form>
          </div>
        </Container>
    );
  }
}

export default Register;
