import { ADD_DECK, FETCH_DECKS } from '../actions/types'
  
export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK :
            return [
                ...state,
                action.deck,
            ]
        case FETCH_DECKS :
            return [
                ...state,
                action.decks,
            ]
        default :
            return state
    }
}
