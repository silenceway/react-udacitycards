import { ADD_QUESTION } from './types';

export function addQuestion({question, answer, deck}) {
    return {
        type: ADD_QUESTION,
        deck: deck,
        question: {
            question: question,
            answer: answer
        }
    };
}