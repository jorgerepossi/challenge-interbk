import Box from "../box";

// @Components
import { FlexCol } from "@/components/flex";
import FormAddPhrases from "@/components/form-add-phrases";
import ListOfPhrases from "@/components/list-of-phrases";
import SearchArea from "@/components/search-area";

const PhrasesSection = () => {
    return (
        <Box className="grid h-full space-x-4 lg:grid-cols-[1fr_auto]">
            <FlexCol>
                <SearchArea />
                <ListOfPhrases />
                
            </FlexCol>
            <FlexCol className="max-h-[400px] gap-6 rounded-md bg-background p-4">
                <h1 className="font-bold text-2xl">Frases del día</h1>
                <FormAddPhrases />
            </FlexCol>
        </Box>
    )
}
export default PhrasesSection;