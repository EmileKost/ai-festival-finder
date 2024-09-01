"use client";

// import { useGetCorrectCities } from "@/hooks/useGetCorrectCities";
import { ButtonDropDown } from "./buttons/ButtonDropdown";

export const HomeHero = () => {
	return (
		<div className="h-screen w-full flex items-center justify-start">
			<div className="w-full">
				<h1 className="text-white-primary font-sans-custom">
					Discover your ideal festival experience
				</h1>
				<p>Choose a location and playlist and start searching.</p>
				<div>
					<ButtonDropDown list={["Amsterdam", "Utrecht", "New York"]} />
				</div>
			</div>
		</div>
	);
};
