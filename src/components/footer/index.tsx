import { Flex } from "../flex";

const Footer = () => {
    return (
        <Flex className=" justify-between bg-background p-4 text-zinc-600">
          <p className="text-current text-xs">  Usuario: @Jo.Repossi</p>
           <p className="text-current text-xs">  &copy; 2025</p>
        </Flex>
    )
}
export default Footer;