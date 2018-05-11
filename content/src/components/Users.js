import React from "react";
import * as userService from "./../services/user.service.js";
import UserForm from "./UserForm";
import { Grid, Row, Col } from "react-bootstrap";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    this.onCancel = this.onCancel.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onSelect = this.onSelect.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  onSelect(item, event) {
    event.preventDefault();
    this.setState({
      formData: item
    });
  }

  onSave(updatedFormData) {
    this.setState(prevState => {
      const existingItem = prevState.users.filter(item => {
        return item._id === updatedFormData._id;
      });
      let updatedItems = [];
      if (existingItem && existingItem.length > 0) {
        updatedItems = prevState.users.map(item => {
          return item._id === updatedFormData._id ? updatedFormData : item;
        });
      } else {
        updatedItems = prevState.users.concat(updatedFormData);
      }
      return {
        users: updatedItems,
        formData: null,
        errorMessage: null
      };
    });
  }

  onCancel() {
    this.setState({ formData: null });
  }

  onDelete() {
    const formData = this.state.formData;
    userService
      .del(formData._id)
      .then(() => {
        this.setState(prevState => {
          const updatedItems = prevState.users.filter(item => {
            return item._id !== formData._id;
          });
          return { users: updatedItems };
        });
        this.onCancel();
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    userService.readAll().then(users => {
      this.setState({ users: users.items });
    });
  }

  render() {
    const users =
      this.state.users.length > 0 ? (
        this.state.users.map(user => (
          <Col sm={6} md={3} key={user._id} onClick={this.onSelect.bind(this, user)}>
            Name: {user.name}
          </Col>
        ))
      ) : (
        <React.Fragment />
      );
    return (
      <React.Fragment>
        <UserForm
          formData={this.state.formData}
          onSave={this.onSave}
          onDelete={this.onDelete}
          onCancel={this.onCancel}
        />
        <Grid>
          <Row>{users}</Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Users;
