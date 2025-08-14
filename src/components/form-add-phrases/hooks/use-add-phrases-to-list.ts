"use client"

import { type ChangeEvent, type FormEvent, useCallback, useState, } from "react"

// @Hooks
import { usePhrases } from "@/hooks/use-phrases"


const useAddPhrasesToList = () => {
    const { addPhrase, state } = usePhrases()
    const [ characters, setCharacters ] = useState('')
    const [ error, setError ] = useState('')

    const handleChangeTextArea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setError('')
        return setCharacters(e.target.value)
    }, [])

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const username = (data.name as string)?.trim();
        const phrase = (data.phrase as string)?.trim();

        if (!username || !phrase) {
            setError('Todos los campos son obligatorios');
            return;
        }



        addPhrase({ username, phrase });

        e.currentTarget.reset();
        setCharacters('');
    }
    return {
        state,
        error,
        characters,
        handleChangeTextArea,
        handleOnSubmit
    }
}
export default useAddPhrasesToList;