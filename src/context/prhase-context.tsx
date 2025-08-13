"use client"

import { createContext } from 'react';

// @/Types
import type { PhraseState, PhraseInput, Phrase } from '@/types/phrases.type';

export interface PhraseContextType {
    state: PhraseState;
    addPhrase: (input: PhraseInput) => void;
    deletePhrase: (id: string) => void;
    clearError: () => void;
    setSearchTerm: (term: string) => void;
    filteredPhrases: Phrase[];
}

 const PhraseContext = createContext<PhraseContextType | undefined>(undefined);

 
export default PhraseContext;