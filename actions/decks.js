import { ADD_DECK, FETCH_DECKS } from './types';

export function addDeck({id, title, cards}) {
    return {
        type: ADD_DECK,
        deck: {
            id: id,
            title: title,
            cards: cards
        }
    };
}

export function setDecks(decks) {
console.log(decks);
    return {
        type: FETCH_DECKS,
        decks
    };
}