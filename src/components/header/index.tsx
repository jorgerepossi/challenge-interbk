import { MessageSquareHeart } from 'lucide-react';

import { Flex } from "../flex";
import Box from '../box';

const Header = () => {
    return (
        <Box className="mb-4 bg-background p-4">
            <header>
                <Flex className='gap-2' >

               <MessageSquareHeart />  GreatPhrases
                </Flex>
            </header>
        </Box>
    )
}
export default Header;