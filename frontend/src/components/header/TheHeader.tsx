"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import Link from "next/link";

import { Navigation } from "./Navigation";
import { Tag } from "../Tag";

import { MAX_USER_SCROLL } from "@/constants/constants";
import { ROUTES } from "@/constants/routes";

type TheHeaderProps = {
	isBeta: boolean;
};

export const TheHeader = ({ isBeta }: TheHeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsScrolling(latest >= MAX_USER_SCROLL ? true : false);
	});

	console.log("test");

	return (
		<motion.header
			animate={{
				y: isScrolling ? "-100%" : "0%",
				opacity: isScrolling ? 0 : 1,
			}}
			className="w-full fixed top-0 left-0 pt-16 pb-8 px-3 md:px-5 flex items-center justify-between z-20">
			<Link
				href={ROUTES.HOME}
				className="flex flex-col md:flex-row gap-1 md:gap-2 items-start md:items-center">
				<h1 className="uppercase text-xl text-white-primary font-normal">
					Unveil AI.
				</h1>
				{isBeta && (
					<Tag
						text="beta"
						color="#717171"
					/>
				)}
			</Link>
			<Navigation setModalOpen={setIsOpen} />
		</motion.header>
	);
};

// TODO:
// - Add nice animation for brand h1 text
// - Maybe change MAX_USER_SCROLL when page more filled (look at what feels nice)
