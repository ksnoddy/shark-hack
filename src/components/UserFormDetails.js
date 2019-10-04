  import React, { Component } from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import TextField from '@material-ui/core/TextField';
  import Button from '@material-ui/core/Button';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import HomeIcon from '@material-ui/icons/Home';
  import SettingsIcon from '@material-ui/icons/Settings';
  import BarChartIcon from '@material-ui/icons/BarChart';
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';

  export class UserFormDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    render() {
      const { values, handleChange } = this.props;
      return (
        <React.Fragment>
        <AppBar
        position="static"
        >
        <Typography
        variant="h6"
        align="center">
        Welcome to UnFatigue Me!
        </Typography>
        </AppBar>

        <TextField
        placeholder="First Name"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        />

        <br/>
        <TextField
        placeholder="Last Name"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
        />

        <br/>

        <br/>

        <Button
        variant="text"
        onClick = {this.continue}
        >
        Continue
        </Button>

        <AppBar
        position="static"
        >
        <Toolbar
        variant="regular">
        <HomeIcon
        color="inherit">
        </HomeIcon>
        <SettingsIcon
        color="inherit">
        </SettingsIcon>
        <BarChartIcon
        color="inherit">
        </BarChartIcon>
        <AccountCircleIcon
        color="inherit">
        </AccountCircleIcon>
        </Toolbar>
        </AppBar>
        </React.Fragment>
      );
    }
  }

  export default UserFormDetails;
