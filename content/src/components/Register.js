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
import * as userService from "./../services/user.service.js";

class Register extends React.Component {
  constructor(props) {
    super(props);
    // const formData=this.intializeValidation();
    this.state = {
      formData: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  // intializeValidation(){
  //   debugger
  //   const formData = {
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   }
  //   this.state({formData:formData})
  // }

  // onSubmitUser(){

  // }
  onSave() {
    const item = {
      email: this.state.formData.email.value,
      password: this.state.formData.password.value
    };
    //check if the form is valid = form contains
    console.log("hi");
    // save to db.
    userService.registerUser(item).then(() => {
      console.log("ur id and pw saved");
    });
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      debugger
      const field = { ...prevState.formData[name] };
      console.log(field)
      // console.log(value)
      field.value = value;
      // const formData = { ...prevState.formData, [name]: field };
      const formData={...prevState.formData, [name]:field}
      // console.log(formData)
      return { formData: formData };
    });
  }

  render() {
    // debugger
    return (
      <Container>
        <div className="div_register">
          <Form className="form_register">
            <h5 id="signup">Sign Up</h5>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={this.onChange}
                value={this.state.formData.email}
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={this.onChange}
                value={this.state.formData.password.value}
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
            <Button outline color="primary" onClick={this.onSave}>
              Submit
            </Button>{" "}
            <Button outline color="secondary">Cancel</Button>{' '}
          </Form>
        </div>
      </Container>
    );
  }
}

export default Register;
