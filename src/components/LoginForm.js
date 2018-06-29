
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
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
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
          Login
      </Button>
    );
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
            { this.renderButton() }
          </CardSection>          
      </Card>
    );
  }
  
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };    
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
