import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { addQuestion } from '../actions/questions';
import { submitQuestion } from '../utils/api';

class QuestionAdd extends Component {
    state = {
        question: '',
        answer: '',
    }
    submit = () => {
        const { deck } = this.props,
            question = this.state.question,
            answer = this.state.answer;

        this.props.dispatch(addQuestion({deck, question, answer}));

        this.setState({
            question: '',
            answer: '',
        });

        submitQuestion(deck, question, answer);

        this.props.navigation.goBack();
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput 
                    style={styles.input}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    placeholder={"Question"} />
                <TextInput 
                    style={styles.input}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                    placeholder={"Answer"} />
                <TouchableOpacity
                    style={[styles.button, styles.buttonBlack]}
                    onPress={this.submit} >
                    <Text style={styles.textWhite}>SAVE</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        deck: state.decks[ownProps.navigation.state.params.deck.id],
        navigation: ownProps.navigation,
    }
}

export default connect(mapStateToProps)(QuestionAdd);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
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

