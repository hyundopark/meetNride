import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <h2>
            group page
            </h2>
    //   <Form>
    //     <FormGroup>
    //       <Label for="GroupName">Group Name</Label>
    //       <Input
    //         type="text"
    //         name="groupName"
    //         id="groupName"
    //         placeholder="Enter Your Group Name"
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="groupType">
    //         Group Type
    //         <Input type="radio" name="radio1" value="True" /> Public
    //       </Label>
    //       {/* <Input type="select" name="select" id="groupType"/> */}
    //     </FormGroup>
    //   </Form>
    );
  }
}
export default CreateGroup;