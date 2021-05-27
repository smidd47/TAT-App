import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/tat-logo.jpg')}}
            />
        );
    };

    return (
        <FlatList
            data={props.results}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;