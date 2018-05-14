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
          <ButtonGroup>
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={() => this.onRadioBtnClick("social")}
              active={this.state.selected === "social"}
            >
              Social
            </Button>
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={() => this.onRadioBtnClick("test")}
              active={this.state.selected === "test"}
            >
              test
            </Button>
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={() => this.onRadioBtnClick("three")}
              active={this.state.selected === "three"}
            >
              Three
            </Button>
          </ButtonGroup>
        </Form>
      </div>
      </Container>
    );
  }
}
export default CreateGroup;
