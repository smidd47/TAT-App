import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

function Mission(props) {

    if (props) {
        return (
            <Card title="About The TAT">
                <Text style={{margin: 10}}>
                    The TAT is an Amateurs only bowling tournament with strict eligibility, which means there are no PBA members or 2 time $10,000 winners from the past 3 years. All of our bowlers are TRUE AMATEURS and past TAT $10,000 winners are not eligible for 2 tournaments.
                    The TAT is a 5 day qualifying event which has 8 different tournaments that run simultaneously throughout the week. Bowlers pick a package that comes with multiple entries into these tournaments, the most important being qualifying squads. Qualifying squads are 3 game sets where bowlers try to make our main TAT finals in their division. We also have lots of Brackets and several sidepots each squad.
                    We have 6 divisions including 3 age divisions, 2 handicap divisions and a division for returning bowlers that did not make the TAT finals last two times they bowled. To simplify it, 1 in 8 bowlers make our finals in each division and is guaranteed a minimum of $500 with more money getting added every round a bowler advances until we have our Top 5.  Daily Division Leaders get a $250 bonus!
                    Every TAT participant can receive at least 1 new Storm or Roto Grip High Performance bowling ball with their first entry along with free squads, free casino money, and a free qualifying entry into the Storm or Roto Grip Challenge. Almost 1 out of 3 bowlers made our finals last February. If you enter early, you can also receive free squads but walk-ins are always welcomed at the tournament.
                    For these reasons the TAT is known as the "Value" megabuck tournament because you get so much for your money. If you have any questions please call us at 1-844-321-8100 or e-mail us at info@tatbowl.com.
                </Text>
            </Card>
        );
    }
    return <View />;
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/tat-logo.jpg')}}
                />
            );
        };

        return (
            <ScrollView>
                <Mission/>
                <Card>
                    <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;