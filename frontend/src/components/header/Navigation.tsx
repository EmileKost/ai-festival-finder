import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { IconHamburger } from "../icons/IconHamburger";

type NavigationProps = {
	setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const navItems = [
	{
		title: "Login",
		href: "/login",
	},
	{
		title: "Register",
		href: "/register",
	},
];
export const Navigation = ({ setModalOpen }: NavigationProps) => (
	<nav className="flex items-center gap-16">
		<div className="md:flex items-center gap-6 hidden">
			{navItems &&
				navItems.length > 0 &&
				navItems.map(({ title, href }) => (
					<Link
						className="text-white-primary relative text-lg font-light before:content-[''] before:h-[1px] before:w-0 hover:before:w-[70%] before:absolute before:left-0 before:bottom-0 before:bg-white-primary before:transition-all"
						key={title}
						href={href}>
						{title}
					</Link>
				))}
		</div>
		<button onClick={() => setModalOpen(true)}>
			<IconHamburger />
		</button>
	</nav>
);
