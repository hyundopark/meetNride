import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./css/createGroup.css";
import TestSelect from "./TestSelect";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    const formData = {
      ridingGroupName: "",
      groupKeyWord: "",
      groupDescribe: ""
    }
    this.state = {
      formData: formData
      // ridingGroupName: "",
      // groupKeyWord: "",
      // groupDescribe: ""
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onRadioBtnClick(selectedKeyWord) {
    this.setState(prevState => {
      return { ...prevState, groupKeyWord: selectedKeyWord };
    });
  }

  onChange(e){
    const target = e.target;
    const value = target.value;//if there's radio, also have it target.checked.
    const name = target.name;
    this.setState(prevState=>{

      const field = {...prevState.formData[name]}

      field.value = value;
      const formData = {...prevState.formData, [name]: field}

      return {formData: formData}
    })

  }
  // onChange(e){
  //   const target = e.target;
  //   this.setState(prevState=>{
  //     return {...prevState, groupDescribe: target.value}

  //   })

  // }

  onSave() {
    console.log("testing");
  }

  render() {
    return (
      <Container>
        <div className="div_createGroup">
          <Form className="form_createGroup">
            <h5 id="createGroup">Create a group</h5>
            <FormGroup>
              <Label for="ridingGroupName">Group Name</Label>
              <Input
                onChange={e => this.onChange(e)}
                type="text"
                name="ridingGroupName"
                id="ridingGroupName"
                placeholder="Enter Your Group Name"
              />
            </FormGroup>
            <Label for="rideSelect">Key Words</Label>
            <TestSelect
              id="rideSelect"
              sendDataKeyWordSelect={this.onRadioBtnClick}
            />
            <br />
            <FormGroup>
              <Label for="groupDescribe">Group Description</Label>
              <Input
                type="textarea"
                name="groupDescribe"
                id="groupDescribe"
                onChange={this.onChange}
                value={this.state.groupDescribe}
              />
            </FormGroup>
            <br />
            <div>
              <Button outline color="primary" onClick={this.onSave}>
                Submit
              </Button>{" "}
              <Button outline color="secondary">
                Clear
              </Button>{" "}
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}
export default CreateGroup;
