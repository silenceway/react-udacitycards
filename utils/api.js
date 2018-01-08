import { AsyncStorage } from 'react-native'
import {CARDS_STORAGE_KEY, formatDecks} from './_quizzes';

export function submitDeck(deck) {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck,
    }));
}

export function getDecks() {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then(formatDecks);
}

export function submitQuestion(deck, question, answer) {
    const questions = deck['questions']

    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [deck.id]: {questions: [...questions, { question: question, answer: answer}]}
    }));
}