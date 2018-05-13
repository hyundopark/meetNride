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
    const formData=this.intializeValidation();
    this.state = {
      formData: formData,
      formValid: false
    };
  }

  intializeValidation(){
    const intializedUser = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  render() {
    return (
        <Container className="register">
          <div className="form_register">
          <Form className="test">
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
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </FormGroup>
            <Button color="primary">Submit</Button>{' '}
            <Button color="default">Cancel</Button>
          </Form>
          </div>
        </Container>
    );
  }
}

export default Register;
