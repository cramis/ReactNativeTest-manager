
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={ styles.errorTextStyle }>
            {this.props.error}
          </Text>
        </View>
      );
    }
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
          { this.renderError() }
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
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
        password: state.auth.password,
        error: state.auth.error
    };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LoginForm);
