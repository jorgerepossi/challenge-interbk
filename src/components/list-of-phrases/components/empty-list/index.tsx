import { Flex, FlexCol } from "@/components/flex";
import { TriangleAlert } from 'lucide-react';

const EmptyList = () => {
    return (
        <Flex className=" h-full items-center justify-center">
            <FlexCol className="items-center gap-2">
                <TriangleAlert size={64} />
                <FlexCol className="items-center space-y-1">
                    <p className="font-medium text-md text-zinc-900"> No se han cargado frases aún</p>
                    <p className="text-sm text-zinc-500"> por favor ingrese una</p>
                </FlexCol>
            </FlexCol>
        </Flex>
    )
}
export default EmptyList;