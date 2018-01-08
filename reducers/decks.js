import { ADD_DECK, FETCH_DECKS, ADD_QUESTION } from '../actions/types'
  
export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK :
            const key = action.deck.id;

            return {
                ...state,
                [key]: action.deck,
            }
        case FETCH_DECKS :
            return {
                ...state,
                ...action.decks,
            };
        case ADD_QUESTION :
            const id = action.deck.id,
                card = { question: action.question.question, answer: action.question.answer};

            return {
                ...state,
                [id]: {
                    id: action.deck.id,
                    title: action.deck.title,
                    questions: [
                        ...action.deck.questions,
                        card
                    ]
                },
            };
        default :
            return state;
    }
}
