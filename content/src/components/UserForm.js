import React from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import * as userService from "./../services/user.service.js";

class UserSignUpForm extends React.Component {
  constructor(props) {
    super(props);
    const formData = this.convertPropsToFormData(props);
    this.state = {
      users: [],
      formData: formData
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const formData = this.convertPropsToFormData(nextProps);
    this.setState({ formData: formData });
  }

  onSave(e) {
    const that = this;
    let item = {
      name: this.state.formData.name.value
    };
    if (this.state.formData._id.value.length > 0) {
      item._id = this.state.formData._id.value;
      userService
        .update(item)
        .then(data => {
          that.props.onSave(item);
        })
        .catch(error => console.log(error));
    } else {
      userService
        .create(item)
        .then(data => {
          this.setState(prevState => {
            const field = { ...prevState.formData._id, _id: data };
            const formData = { ...prevState.formData, _id: field };
            return { ...prevState, formData: formData };
          });
          that.props.onSave({ ...item, _id: data.item });
        })
        .catch(error => console.log(error));
    }
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const field = { ...prevState.formData[name] };
      field.value = value;
      const formData = { ...prevState.formData, [name]: field };

      return { formData: formData };
    });
  }

  convertPropsToFormData(props) {
    const user = props.formData && props.formData._id ? props.formData : {};

    const initializeduser = {
      _id: user._id || "",
      name: user.name || ""
    };

    let formData = {
      _id: {
        originalValue: initializeduser._id,
        value: initializeduser._id
      },
      name: {
        originalValue: initializeduser.name,
        value: initializeduser.name
      }
    };

    return formData;
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <FormGroup controlId="firstName">
            <ControlLabel>Name </ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.formData.name.value}
              placeholder="Enter Your Name"
              onChange={this.onChange}
            />
          </FormGroup>
        </form>
        <Button
          bsStyle="success"
          bsSize="small"
          type="button"
          onClick={this.onSave}
        >
          Submit
        </Button>
        <Button
          bsStyle="danger"
          bsSize="small"
          type="button"
          onClick={this.props.onCancel}
        >
          Cancel
        </Button>
        <Button
          bsStyle="default"
          bsSize="small"
          type="button"
          onClick={() => this.props.onDelete(this.state.formData)}
        >
          Delete
        </Button>
      </React.Fragment>
    );
  }
}

export default UserSignUpForm;
