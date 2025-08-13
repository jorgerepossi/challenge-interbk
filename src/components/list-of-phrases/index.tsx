"use client"

import { Quote, TrashIcon } from 'lucide-react';

// @Hooks
import { usePhrases } from "@/hooks/use-phrases";

// @Components
import ListWrapper from "./components/list-wrapper";
import { Flex, FlexCol } from "../flex";
import { Button } from '../ui/button';

const ListOfPhrases = () => {
    const { state, deletePhrase, filteredPhrases, setSearchTerm } = usePhrases();

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    if (state.isLoading) return <p> cargando</p>

    return (
        <ListWrapper
            items={filteredPhrases}
            isSearching={!!state.searchTerm}
            searchTerm={state.searchTerm}
            onClearSearch={handleClearSearch}
        >
            <p>Mostrando {state.phrases.length} frases.</p>

            <Flex className="flex-wrap gap-4">
                {filteredPhrases.map((phrase) => (
                    <Flex key={phrase.id} className="w-full max-w-[350px] bg-background p-4">
                         <FlexCol className="w-full space-y-4">
                        <FlexCol className="w-full space-y-4">
                                <Flex className="w-full items-center justify-between">
                                    <p> @{phrase.username} </p>
                                    <Button 
                                    variant={'ghost'} 
                                    className='hover:cursor-pointer'
                                    onClick={() => deletePhrase(phrase.id)}> <TrashIcon size={16} /> </Button>
                                </Flex>
                                    <code>
                                <Flex className="bg-muted p-4 text-muted-foreground">

                                    <Quote size={12} className='rotate-[180deg]' />
                                    <p className="text-current text-sm"> ...{phrase.phrase}</p> 
                                    <Quote size={12} />
                                </Flex>
                                    </code>
                        </FlexCol>
                       

                            <p className="text-muted-foreground text-xs">
                                {new Date(phrase.created_at).toLocaleDateString('es-ES', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </FlexCol>
                    </Flex>
                ))}
            </Flex>
        </ListWrapper>
    )
}
export default ListOfPhrases;