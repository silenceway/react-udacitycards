import { ADD_DECK, FETCH_DECKS } from '../actions/types'
  
export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK :
            const key = action.deck.title;

            return {
                ...state,
                key: action.deck,
            }
        case FETCH_DECKS :
            return {
                ...state,
                ...action.decks,
            };
        default :
            return state;
    }
}
