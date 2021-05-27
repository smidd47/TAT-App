import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { RESULTS } from '../shared/results';

function RenderResult({result}) {
    if (result) {
        return (
            <Card 
                featuredTitle={result.name}
                image={require('./images/tat-logo.jpg')}
            >
                <Text style={{margin: 10}}>
                    {result.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class ResultInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: RESULTS
        };
    }

    static navigationOptions = {
        title: 'Results'
    }

    render() {
        const resultId = this.props.navigation.getParam('resultId');
        const result = this.state.results.filter(result => result.id === resultId)[0];
        return <RenderResult result={result} />;
    }
}

export default ResultInfo;