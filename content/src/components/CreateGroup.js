import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
  Container
} from "reactstrap";
import "./css/createGroup.css";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <Container>
        <div className="div_createGroup">
          <Form className="form_createGroup">
            <h5 id="createGroup">Create a group</h5>
            <FormGroup class="col-md-6">
              <Label for="groupName">Group Name</Label>
              <Input
                type="text"
                name="groupName"
                id="groupName"
                placeholder="Enter Your Group Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="groupDescribe">Group Description</Label>
              <Input type="textarea" name="groupDescribe" id="groupDescribe" />
            </FormGroup>
            <br />
            <br />
            <div>
              <Button outline color="primary">
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
