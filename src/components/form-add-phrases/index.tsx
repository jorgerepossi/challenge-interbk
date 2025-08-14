"use client"

// @Components
import { Flex, FlexCol } from "@/components/flex";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

// @Hooks
 import useAddPhrasesToList from './hooks/use-add-phrases-to-list';

const FormAddPhrases = () => {
    const {
        state,
        error,
        characters,
        handleChangeTextArea,
        handleOnSubmit
    } = useAddPhrasesToList()
    return (
        <form onSubmit={handleOnSubmit} className="w-[400px]">
            <FlexCol className="space-y-8">
                <FlexCol className="gap-4">
                    <FlexCol className="space-y-2">
                        <Label htmlFor="name"> Nombre</Label>
                        <Input type="text" name='name' id="name" />
                    </FlexCol>
                    <FlexCol className="space-y-2">
                        <Label htmlFor="phrase"> Frase</Label>
                        <FlexCol className="relative gap-2">

                            <Textarea
                                id="phrase"
                                name='phrase'
                                onChange={handleChangeTextArea}
                                placeholder="Escribe tu frase aquí..."
                                maxLength={200}  />
                            <Flex className="justify-end">
                                <p className="text-xs text-zinc-500">{characters.length} caracteres</p>
                            </Flex>
                        </FlexCol>
                    </FlexCol>
                </FlexCol>
                {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
                <Button 
                type='submit' 
                className='hover:cursor-pointer'
                disabled={state.isLoading || !characters.trim()}
                > {state.isLoading ? 'Agregando...' : 'Agregar nueva frase'} </Button>
            </FlexCol>
        </form>
    )
}
export default FormAddPhrases;