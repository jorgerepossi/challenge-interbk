"use client"

import { useContext } from "react";

// @/Context
import PhraseContext from "@/context/prhase-context";
 

export const usePhrases = () => {
    const context = useContext(PhraseContext);
    if (!context) {
        throw new Error('usePhrases debe usarse dentro de PhraseProvider');
    }
    return context;
};