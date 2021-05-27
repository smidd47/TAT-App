import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function ResultInfo(props) {
    return <RenderResult result={props.result} />;
}

export default ResultInfo;