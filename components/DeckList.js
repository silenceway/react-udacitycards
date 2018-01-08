import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, ScrollView } from 'react-native';
import { getDecks } from '../utils/api';
import { setDecks } from '../actions/decks';
import DeckItem from './DeckItem';

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        
        getDecks()
            .then((decks) => dispatch(setDecks(decks)));
    }
    render() {
        const { decks } = this.props;

        return (
            <View style={styles.deckList}>
                <ScrollView>
                {decks && decks.length && Object.keys(decks[0]).map((key) => {
                    const deck = decks[0][key];
                    return (
                        <DeckItem key={deck.id} numCards={deck.questions.length} deck={deck} navigation={this.props.navigation} />
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

const styles = StyleSheet.create({
    deckList: {
        flex: 1,
    },
});


export default connect(mapStateToProps)(DeckList);
