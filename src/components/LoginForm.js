
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
      this.props.passwordChanged(text);
  }
  
  render() {
    return (
      <Card>
          <CardSection>
            <Input 
              placeholder='user@test.com'
              label='email'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input 
              secureTextEntry
              placeholder='input password'
              label='password'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          {/* <Text style={styles.errorTextStyle}>
            error
          </Text> */}
          <CardSection>
            <Button>
                Login
            </Button>
          </CardSection>          
      </Card>
    );
  }
  
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
