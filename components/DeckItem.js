import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DeckItem ({deck, numCards, navigation}) {
    onPress = () => {
        navigation.navigate('DeckView', {deck: deck});
    }

    return (
        <View style={styles.deckContainer}>
        <TouchableOpacity 
            style={styles.deckItem}
            onPress={this.onPress}>
            <Text>{deck.title}</Text>
            <Text>{numCards} Cards</Text>
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

