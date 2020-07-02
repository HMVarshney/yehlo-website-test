import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";


export class GetInTouchForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      
        <Form>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="message"
          placeholder="Message"
          onChange={this.handleChange}
          value={this.state.message}
        />
      </FormGroup>
      <Button style={{fontWeight: "600"}}>Submit</Button>
    </Form>
 

    );
  }
}

export default GetInTouchForm;
