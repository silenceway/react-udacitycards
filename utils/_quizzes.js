import { AsyncStorage } from 'react-native'

export const CARDS_STORAGE_KEY = 'UdaciCards:decks';
export const NOTIFICATIONS_STORAGE_KEY = 'UdaciCards:notification';

function setDummyData() {
    const dummyData = {
        React: {
          id: 'React',
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
            id: 'JavaScript',
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(dummyData))

    return dummyData;
}

export function formatDecks(results) {
    return results === null ?
        setDummyData() :
        JSON.parse(results)
}