import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./css/createGroup.css";
import TestSelect from "./TestSelect";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    const formData = {
      ridingGroupName: {
        value: ""
      },
      groupKeyWord: {
        value: ""
      },
      groupDescribe: {
        value: ""
      }
    };
    this.state = {
      formData: formData
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onRadioBtnClick(selectedKeyWord) {
    this.setState(prevState => {
      const field = { ...prevState.formData["groupKeyWord"] };
      field.value = selectedKeyWord;
      const formData = { ...prevState.formData, ["groupKeyWord"]: field };
      return { formData: formData };
    });
  }

  onChange(e) {
    const target = e.target;
    const value = target.value; //if there's radio, also have it target.checked.
    const name = target.name;
    this.setState(prevState => {
      const field = { ...prevState.formData[name] };
      field.value = value;
      const formData = { ...prevState.formData, [name]: field };

      return { formData: formData };
    });
  }

  onSave() {
    console.log("testing");
    //create a deep copy of formData
    const formData = JSON.parse(JSON.stringify(this.state.formData));
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
                type="text"
                name="ridingGroupName"
                id="ridingGroupName"
                placeholder="Enter Your Group Name"
                onChange={this.onChange}
                value={this.state.formData.ridingGroupName.value}
              />
              {/* ridingGroupName */}
            </FormGroup>
            <Label for="groupKeyWord">Key Words</Label>
            <TestSelect
              id="groupKeyWord"
              name="groupKeyWord"
              onChange={this.onChange}
              value={this.state.formData.groupKeyWord.value}
              sendDataKeyWordSelect={this.onRadioBtnClick}
            />
            <br />
            <FormGroup>
              <Label for="groupDescribe">Tell us about your group</Label>
              <Input
                type="textarea"
                name="groupDescribe"
                id="groupDescribe"
                onChange={this.onChange}
                value={this.state.formData.groupDescribe.value}
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
