import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                    <Text>Jamie McWilliams</Text>
                    <Text>Phone: 1-844-321-8100</Text>
                    <Text style={{marginBottom: 10}}>Email: info@tatbowl.com</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;