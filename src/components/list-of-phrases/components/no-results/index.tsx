import { SearchX } from 'lucide-react';

// @Components
import { FlexCol } from '@/components/flex';
import { Button } from '@/components/ui/button';


interface NoResultsProps {
    searchTerm: string;
    onClearSearch: () => void;
}

const NoResults = ({ searchTerm, onClearSearch }: NoResultsProps) => {
    return (
        <FlexCol className="items-center justify-center space-y-4 h-full ">
            <SearchX size={64}  />
            <FlexCol className="gap-2 text-center">
                <h3 className="font-medium text-gray-900 text-lg">
                    No se encontraron resultados
                </h3>
                <FlexCol>
                    <p className="text-muted-foreground text-md">
                    No hay frases que contengan "{searchTerm}"
                </p>
                <p className="text-muted-foreground text-sm">
                    Intenta con otros términos de búsqueda
                </p>
                </FlexCol>
            </FlexCol>
            <Button variant="destructive" onClick={onClearSearch}>
                Limpiar búsqueda
            </Button>
        </FlexCol>
    );
};

export default NoResults;