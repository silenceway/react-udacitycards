import React, { Component } from 'react';
import { Easing, View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import CustomFlipView from './CustomFlipView';

class QuestionsView extends Component {
    state = {
        questions: {},
        currentQuestion: 0,
        isFlipped: false,
        rightAnswers: 0,
        wrongAnswers: 0,
        finish: false,
    }
    componentDidMount() {
        const { deck } = this.props;
        
        this.setState({
            questions: deck.questions,
        });
    }
    onRightPress = () => {
        this.setState({
            rightAnswers: this.state.rightAnswers + 1,
        }, () => this.gotoNextQuestion());
    }
    onWrongPress = () => {
        this.setState({
            wrongAnswers: this.state.wrongAnswers + 1,
        }, () => this.gotoNextQuestion());
    }
    gotoNextQuestion() {
        const questions = this.state.questions,
            currentQuestion = this.state.currentQuestion;

        if (currentQuestion + 1 >= questions.length) {
            this.setState({
                finish: true,
            });
            return;
        }

        this.setState({
            currentQuestion: currentQuestion + 1,
        });
    }
    _flip = () => {
        this.setState({isFlipped: !this.state.isFlipped});
    };
    _renderFront() {
        const questions = this.state.questions,
            currentQuestion = this.state.currentQuestion;

        return(
        <View style={styles.cardHeader}>
            <Text style={styles.title}>{questions[currentQuestion].question}</Text>
            <TouchableOpacity
                onPress={this._flip} >
                <Text style={styles.textCenter}>Answer</Text>
            </TouchableOpacity> 
        </View>);
    }
    _renderBack() {
        const questions = this.state.questions,
            currentQuestion = this.state.currentQuestion;

        return(
        <View style={styles.cardHeader}>
            <Text style={styles.answer}>{questions[currentQuestion].answer}</Text>
            <TouchableOpacity
                onPress={this._flip} >
                <Text style={styles.textCenter}>Question</Text>
            </TouchableOpacity> 
        </View>);
    }
    render() {
        const questions = this.state.questions,
            currentQuestion = this.state.currentQuestion;

            return (
            <View style={styles.container}>
                <Text style={styles.counter}>{currentQuestion + 1} / {questions.length}</Text>
                {this.state.finish ?
                <View>
                    <Text style={styles.title}>Finish</Text>
                    <Text>Right: {this.state.rightAnswers}</Text>
                    <Text>Wrong: {this.state.wrongAnswers}</Text>
                </View> :
                <View style={{position: 'relative', padding: 10}}>
                {questions.length ?
                <View>
                <CustomFlipView
                    front={this._renderFront()}
                    back={this._renderBack()}
                    isFlipped={this.state.isFlipped}
                    onFlipped={(val) => {console.log('Flipped: ' + val);}}
                    flipAxis="y"
                    flipEasing={Easing.out(Easing.ease)}
                    flipDuration={500}
                    perspective={1000}/>
                <TouchableOpacity
                    style={[styles.button, styles.buttonGreen]}
                    onPress={this.onRightPress} >
                    <Text style={styles.textWhite}>Correct</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.button, styles.buttonRed]}
                    onPress={this.onWrongPress} >
                    <Text style={styles.textWhite}>Incorrect</Text>
                </TouchableOpacity>
                </View>
                :
                <View><Text>No questions.</Text></View>}
                </View>}
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
        fontSize: 30,
        marginBottom: 10,
    },
    answer: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        borderRadius: 3,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    buttonGreen: {
        backgroundColor: 'green',
    },
    buttonRed: {
        backgroundColor: 'red',
    },
    textWhite: {
        color: 'white',
    },
    textBlack: {
        color: 'black',
    },
    textCenter: {
        textAlign: 'center',
    },
});