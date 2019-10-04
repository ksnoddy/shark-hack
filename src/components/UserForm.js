import React, {Component} from 'react';
import UserFormDetails from './UserFormDetails.js';
import HomeScreen from './HomeScreen.js';
import UserConfirm from './UserConfirm.js';

export class UserForm extends Component {
    state = {
    step: 1,

    //declares inputs
    firstname: '',
    lastName: '',
  }

  //forward button function
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  //back button function
  backStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Handle Input
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName} = this.state;
    const values = { firstName, lastName};

    switch(step) {
      default: case 1:
        return (
            <UserFormDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
            );

      case 2:
            return (
              <UserConfirm
                nextStep={this.nextstep}
                prevStep={this.prevstep}
                values={values}
              />
            );

      case 3:
            return (
                <HomeScreen/>
            )
    }
  }
}

export default UserForm;
