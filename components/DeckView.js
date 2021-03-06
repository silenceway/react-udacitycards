import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
    state = {
        deck: null,
    }
    onCardPress = () => {
        const { navigation, deck } = this.props;

        navigation.navigate('QuestionAdd', {deck: deck});
    }
    onQuizzPress = () => {
        const { navigation, deck } = this.props;

        navigation.navigate('QuestionsView', {deck: deck});
    }
    render() {
        const { deck } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subtitle}>{deck.questions.length} Cards</Text>
                <View style={{height: 30}} />
                <TouchableOpacity 
                    style={[styles.button, styles.buttonWhite]}
                    onPress={this.onCardPress}>
                    <Text style={styles.textBlack}>Add a Card</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.buttonBlack]}
                    onPress={this.onQuizzPress}>
                    <Text style={styles.textWhite}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        deck: state.decks[ownProps.navigation.state.params.deck.id],
        navigation: ownProps.navigation,
    }
}

export default connect(mapStateToProps)(DeckView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#666666',
    },
    button: {
        borderRadius: 3,
        padding: 10,
        marginBottom: 10,
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
