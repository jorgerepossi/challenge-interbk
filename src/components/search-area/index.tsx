"use client"
import { useCallback } from "react";
import { SearchIcon, X } from "lucide-react";

// @/Components
import { Flex } from "@/components/flex";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 
// @Hooks
import { usePhrases } from "@/hooks/use-phrases";

const SearchArea = () => {
    const { state, setSearchTerm } = usePhrases();

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, [setSearchTerm]);

    const clearSearch = useCallback(() => {
        setSearchTerm('');
    }, [setSearchTerm]);


    return  (
        <Flex className="mb-4 border-b p-4">
            <Flex className="relative w-full max-w-md items-center space-x-2">
                <Flex className="absolute left-2">
                    <SearchIcon className="text-muted-foreground" size={20} />
                </Flex>
                <Input 
                    placeholder="Buscar frases o usuarios..."
                    value={state.searchTerm}
                    onChange={handleSearchChange}
                    className="pr-8 pl-8"
                />
                {state.searchTerm && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearSearch}
                        className="absolute right-2 h-6 w-6 p-0"
                    >
                        <X size={14} />
                    </Button>
                )}
            </Flex>
            
        </Flex>
    )
}
export default SearchArea;