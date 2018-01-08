import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import DeckDetail from './DeckDetail';

export default function DeckItem (deck) {
console.log(deck);
    onPress = () => {
    }

    return (
        <View style={styles.deckContainer}>
        <TouchableOpacity 
            style={styles.deckItem}
            onPress={this.onPress}>
            <Text>
            {deck.title}
            </Text>
            <Text>
            {deck.numCards} Cards
            </Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
    },
    deckItem: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
		borderColor: 'black',
        borderWidth: 1,
        margin: 10,
    },
});

