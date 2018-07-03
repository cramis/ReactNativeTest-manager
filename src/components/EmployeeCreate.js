import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder='Jane'
                    label='Name'
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    placeholder='555-555-5555'
                    label='phone'
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    value={this.props.phone}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <CardSection>
                        <Picker
                            style={ styles.pickerStyle }
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label='Monday' value='Monday' />
                            <Picker.Item label='Tuesday' value='Tuesday' />
                            <Picker.Item label='Wednesday' value='Wednesday' />
                            <Picker.Item label='Thursday' value='Thursday' />
                            <Picker.Item label='Friday' value='Friday' />
                            <Picker.Item label='Saturday' value='Saturday' />
                            <Picker.Item label='Sunday' value='Sunday' />                        
                        </Picker>
                    </CardSection>                    
                </CardSection>  
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>          
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
      },
    pickerStyle: {
        backgroundColor: '#9F9F9F',
        height: 40,
        alignSelf: 'stretch', 
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
    }
        
  };

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
