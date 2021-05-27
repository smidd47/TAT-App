import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RESULTS } from '../shared/results';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: RESULTS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ResultInfo', { resultId: item.id })}
                    leftAvatar={{ source: require('./images/tat-logo.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.results}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;