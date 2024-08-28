import { Tag } from "./Tag";

type TheHeaderProps = {
	isBeta: boolean;
};

export const TheHeader = ({ isBeta }: TheHeaderProps) => {
	return (
		<header className="w-full pt-16 pb-8 px-3 md:px-5">
			<div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start md:items-center">
				<h1 className="uppercase text-lg text-white-primary font-normal">
					Unveil AI.
				</h1>
				{isBeta && (
					<Tag
						text="beta"
						color="#717171"
					/>
				)}
			</div>
		</header>
	);
};
