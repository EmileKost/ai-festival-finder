"use client";

import { useState } from "react";

import { Navigation } from "./Navigation";
import { Tag } from "../Tag";

type TheHeaderProps = {
	isBeta: boolean;
};

export const TheHeader = ({ isBeta }: TheHeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header className="w-full fixed top-0 left-0 pt-16 pb-8 px-3 md:px-5 flex items-center justify-between">
			<div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start md:items-center">
				<h1 className="uppercase text-xl text-white-primary font-normal">
					Unveil AI.
				</h1>
				{isBeta && (
					<Tag
						text="beta"
						color="#717171"
					/>
				)}
			</div>
			<Navigation setModalOpen={setIsOpen} />
			<div className="w-full h-screen absolute right-0 top-0 bg-black-primary"></div>
		</header>
	);
};

// TODO:
// - Add nice animation for brand h1 text
