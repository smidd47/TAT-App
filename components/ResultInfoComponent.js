import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        results: state.results
    };
};

function RenderResult(props) {

    const {result} = props;

    if (result) {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card 
                    featuredTitle={result.name}
                    image={{uri: baseUrl + result.image}}
                >
                    <Text style={{margin: 10}}>
                        {result.description}
                    </Text>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
}

class ResultInfo extends Component {

    static navigationOptions = {
        title: 'Results'
    }

    render() {
        const resultId = this.props.navigation.getParam('resultId');
        const result = this.props.results.results.filter(result => result.id === resultId)[0];
        return <RenderResult result={result} />;
    }
}

export default connect(mapStateToProps)(ResultInfo);