import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

class QuestionsView extends Component {
    state = {
        questions: {},
        currentQuestion: 0,
    }
    componentDidMount() {
        const { deck } = this.props;
        
        this.setState({
            questions: deck.questions,
        });
    }
    onPress = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
        });
    }
    render() {
        const questions = this.state.questions,
            currentQuestion = this.state.currentQuestion;

            return (
            <View style={styles.container}>
                <Text style={styles.counter}>{currentQuestion + 1} / {questions.length}</Text>
                {questions.length ?
                <View>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{questions[currentQuestion].question}</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonBlack]}
                    onPress={this.onPress} >
                    <Text style={styles.textWhite}>Correct</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.button, styles.buttonBlack]}
                    onPress={this.onPress} >
                    <Text style={styles.textWhite}>Incorrect</Text>
                </TouchableOpacity>
                </View>
            :
                <View><Text>No questions.</Text></View>}
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        deck: ownProps.navigation.state.params.deck,
    }
}

export default connect(mapStateToProps)(QuestionsView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
    },
    cardHeader: {
        padding: 15,
        margin: 10,
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    },
    button: {
        borderRadius: 3,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    buttonBlack: {
        backgroundColor: 'black',
    },
    buttonWhite: {
        backgroundColor: 'white',
    },
    textWhite: {
        color: 'white',
    },
    textBlack: {
        color: 'black',
    },
});