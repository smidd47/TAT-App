import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ResultInfo from './ResultInfoComponent';
import { View } from 'react-native';
import { RESULTS } from '../shared/results';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: RESULTS,
            selectedResult: null
        };
    }

    onResultSelect(resultId) {
        this.setState({selectedResult: resultId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    results={this.state.results}
                    onPress={resultId => this.onResultSelect(resultId)}
                />
                <ResultInfo
                    result={this.state.results.filter(
                        result => result.id === this.state.selectedResult)[0]}
                />
            </View>
        );    
    }
}

export default Main;