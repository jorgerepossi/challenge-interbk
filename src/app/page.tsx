// @Components
import Box from "@/components/box";
import { FlexCol } from "@/components/flex";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PhrasesSection from "@/components/phrases-section";



export default function HomePage() {
	return (
		<Box className="grid h-full grid-rows-[auto_1fr_auto] ">
			<Header />
			<FlexCol className="px-4 ">
				<PhrasesSection />
			</FlexCol>
			<Footer />
		</Box>
	);
}
