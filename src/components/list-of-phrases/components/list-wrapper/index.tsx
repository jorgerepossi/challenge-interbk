import type { ReactNode } from 'react';

// @Components
import EmptyList from '../empty-list';
import NoResults from '@/components/list-of-phrases/components/no-results';

//@Types
import type { Phrase } from '@/types/phrases.type';
import { FlexCol } from '@/components/flex';
 

interface ListWrapperProps {
    items: Phrase[];  
    children: ReactNode;
    isSearching?: boolean;  
    searchTerm?: string;    
    onClearSearch?: () => void;  
}

const ListWrapper = ({ 
    items, 
    children, 
    isSearching = false, 
    searchTerm = '', 
    onClearSearch 
 }: ListWrapperProps) => {

    if (items.length === 0) {
         
        if (isSearching && searchTerm && onClearSearch) {
            return <NoResults searchTerm={searchTerm} onClearSearch={onClearSearch} />;
        }
         
        return <EmptyList />;
    }
    
    return <FlexCol className='gap-4'>{children}</FlexCol>;
};

export default ListWrapper;