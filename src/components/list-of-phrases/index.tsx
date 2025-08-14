"use client"

import { Quote, TrashIcon } from 'lucide-react';

// @Types
import type { Phrase } from '@/types/phrases.type';

// @Components
import Box from '@/components/box';
import ListWrapper from "./components/list-wrapper";
import { Button } from '@/components/ui/button';
import { Flex, FlexCol } from "@/components/flex";

// @Hooks
import { usePhrases } from "@/hooks/use-phrases";

const ListOfPhrases = () => {
    const { state, deletePhrase, filteredPhrases, setSearchTerm } = usePhrases();

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    if (state.isLoading) return <p> cargando</p>

    const createUserName = (name: string) => {
        return name.replace(/\s/g, '').trim()
    }

    return (
        <ListWrapper
            items={filteredPhrases}
            isSearching={!!state.searchTerm}
            searchTerm={state.searchTerm}
            onClearSearch={handleClearSearch}
        >
            <p>Mostrando {state.phrases.length} frases.</p>

            <Flex className="flex-wrap gap-4 py-4">
                {filteredPhrases.map((phrase: Phrase) => (
                    <Flex key={phrase.id} className="w-full max-w-[350px] bg-background p-4">
                        <Box className="grid w-full grid-rows-[auto_1fr_auto] space-y-4">
                            
                            <FlexCol className="w-full space-y-4">
                                <Flex className="w-full items-center justify-between">
                                    <p> @{createUserName(phrase.username)} </p>
                                    <Button
                                        variant={'ghost'}
                                        className='hover:cursor-pointer'
                                        onClick={() => deletePhrase(phrase.id)}> <TrashIcon size={16} /> </Button>
                                </Flex>

                            </FlexCol>

                            <code>
                                <Flex className="bg-muted p-4 text-muted-foreground">
                                    <span> <Quote size={12} className='rotate-[180deg]' /> </span>
                                    <p className="text-current text-sm italic">
                                        ...{phrase.phrase} </p> <span>  <Quote size={12} /> </span>
                                </Flex>
                            </code>
                            <p className="text-muted-foreground text-xs">
                                {new Date(phrase.created_at).toLocaleDateString('es-ES', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </ListWrapper>
    )
}
export default ListOfPhrases;