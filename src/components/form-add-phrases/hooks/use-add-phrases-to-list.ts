"use client"

import { type ChangeEvent, type FormEvent, useCallback, useState, } from "react"

// @Hooks
import { usePhrases } from "@/hooks/use-phrases"


const useAddPhrasesToList = () => {
    const { addPhrase, state } = usePhrases()
    const [ characters, setCharacters ] = useState('')

    const handleChangeTextArea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        return setCharacters(e.target.value)
    }, [])

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        addPhrase({
            username: data.name as string,
            phrase: data.phrase as string
        });

        e.currentTarget.reset();
        setCharacters('');
    }
    return {
        state,
        characters,
        handleChangeTextArea,
        handleOnSubmit
    }
}
export default useAddPhrasesToList;