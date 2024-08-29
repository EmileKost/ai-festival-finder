import { HomeHero } from "@/components/HomeHero";
import { Collaboration } from "@/components/Collaboration";

import { collaborators as collaboratorsList } from "@/constants/collaborators";

export default function Home() {
	return (
		<main className="w-full h-screen px-2 md:px-5 flex flex-col items-center relative">
			<HomeHero />
			<Collaboration collaborators={collaboratorsList} />
		</main>
	);
}
