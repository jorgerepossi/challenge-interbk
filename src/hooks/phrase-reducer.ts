import type { PhraseState, PhraseAction } from '@/types/phrases.type'

export const phraseReducer = (state: PhraseState, action: PhraseAction): PhraseState => {
    switch (action.type) {
        case 'ADD_PHRASE':
            return {
                ...state,
                phrases: [...state.phrases, action.payload],
                error: null
            };

        case 'DELETE_PHRASE':
            return {
                ...state,
                phrases: state.phrases.filter(phrase => phrase.id !== action.payload)
            };

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };
        case 'LOAD_PHRASES':
            return {
                ...state,
                phrases: action.payload,
                error: null
            };

        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            };

        default:
            return state;
    }

}