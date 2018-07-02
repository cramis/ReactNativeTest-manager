import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

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
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>          
            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
