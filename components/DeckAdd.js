import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import uuid from 'uuid';
import { addDeck, setDecks } from '../actions/decks';
import { submitDeck, getDecks } from '../utils/api';

class DeckAdd extends Component {
    state = {
        title: '',
    }
    submit = () => {
        const key = uuid(),
            deck = {
                id: key,
                title: this.state.title,
                questions: [],
            };

        this.props.dispatch(addDeck(deck));

        this.setState({
            title: '',
        });

        submitDeck(deck);

        this.props.navigation.navigate('DeckView', {deck: deck});
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    placeholder={"Title"} />
                <TouchableOpacity
                    style={[styles.button, styles.buttonBlack]}
                    onPress={this.submit} >
                    <Text style={styles.textWhite}>SAVE</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(DeckAdd);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    },
    input: {
		borderColor: 'black',
        borderWidth: 1,
        margin: 20,
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    button: {
        borderRadius: 3,
        padding: 10,
        marginBottom: 10,
    },
    buttonBlack: {
        backgroundColor: 'black',
    },
    textWhite: {
        color: 'white',
    },
});
