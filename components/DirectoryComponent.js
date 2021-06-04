import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        results: state.results
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'TAT Champs'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('ResultInfo', { resultId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        if (this.props.results.isLoading) {
            return <Loading />;
        }
        if (this.props.results.errMess) {
            return (
                <View>
                    <Text>{this.props.results.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.results.results}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);