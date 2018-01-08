import { ADD_DECK, FETCH_DECKS } from './types';

export function addDeck({id, title, questions}) {
    return {
        type: ADD_DECK,
        deck: {
            id: id,
            title: title,
            questions: questions
        }
    };
}

export function setDecks(decks) {
    return {
        type: FETCH_DECKS,
        decks
    };
}