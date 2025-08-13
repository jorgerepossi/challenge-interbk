"use client";

import { 
    useCallback, 
    useReducer, 
    useEffect, 
    useState, 
    useMemo, 
    type ReactNode 
} from "react";

// @Types
import type { Phrase, PhraseInput, PhraseState } from '@/types/phrases.type';

// @Components
import PhraseContext from "@/context/prhase-context";

// @Hooks
import { phraseReducer } from '@/hooks/phrase-reducer';

const initialState: PhraseState = {
    phrases: [],
    isLoading: false,
    error: null,
    searchTerm: ''
};

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(phraseReducer, initialState);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        dispatch({ type: 'SET_LOADING', payload: true });
        setTimeout(() => {
            try {
                const saved = localStorage.getItem('phrases');
                if (saved && saved !== 'null' && saved !== '[]') {
                    const parsed: Phrase[] = JSON.parse(saved);
                    dispatch({ type: 'LOAD_PHRASES', payload: parsed });
                } else {
                    console.log('No hay frases en localStorage');
                }
            } catch (error) {
                 dispatch({ type: 'SET_ERROR', payload: 'Error al cargar frases' });
            } finally {
                dispatch({ type: 'SET_LOADING', payload: false });
                setIsInitialized(true);
            }
        }, 800);
    }, []);


    useEffect(() => {
        if (isInitialized) {
            try {
                if (state.phrases.length === 0) {
                    localStorage.removeItem('phrases');
                } else {
                    localStorage.setItem('phrases', JSON.stringify(state.phrases));
                }
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: 'Error al guardar frases' });
            }
        } else {
            console.log('No guardando porque no está inicializado');
        }
    }, [state.phrases, isInitialized]);

    const addPhrase = useCallback((input: PhraseInput) => {
        console.log('➕ Agregando nueva frase:', input);
        try {
            const newPhrase: Phrase = {
                id: `phrase-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                ...input,
                created_at: new Date().toISOString()
            };
            dispatch({ type: 'ADD_PHRASE', payload: newPhrase });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: 'Error al agregar la frase' });
        }
    }, []);

    const deletePhrase = useCallback((id: string) => {
        dispatch({ type: 'DELETE_PHRASE', payload: id });
    }, []);

    const setSearchTerm = useCallback((term: string) => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: term });
    }, []);

    const filteredPhrases = useMemo(() => {
        if (!state.searchTerm.trim()) return state.phrases;

        const searchLower = state.searchTerm.toLowerCase();
        const filtered = state.phrases.filter(phrase =>
            phrase.phrase.toLowerCase().includes(searchLower) ||
            phrase.username.toLowerCase().includes(searchLower)
        );

        return filtered;
    }, [state.phrases, state.searchTerm]);

    const clearError = useCallback(() => {
        dispatch({ type: 'CLEAR_ERROR' });
    }, []);

    const providerValue = {
        state,
        addPhrase,
        deletePhrase,
        clearError,
        setSearchTerm,
        filteredPhrases
    };

    return (
        <PhraseContext.Provider value={providerValue}>
            {children}
        </PhraseContext.Provider>
    );
};