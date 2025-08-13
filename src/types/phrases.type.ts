export type Phrase = {
    id: string;
    username: string,
    phrase: string,
    created_at: string;
}
export type PhraseInput = Omit<Phrase, 'id' | 'created_at'>;

export type PhraseState = {
    phrases: Phrase[];
    isLoading: boolean;
    error: string | null;
    searchTerm: string; 
}
export type PhraseAction = 
    | { type: 'ADD_PHRASE'; payload: Phrase }
    | { type: 'DELETE_PHRASE'; payload: string }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'CLEAR_ERROR' }
    | { type: 'LOAD_PHRASES'; payload: Phrase[] }
    | { type: 'SET_SEARCH_TERM'; payload: string };