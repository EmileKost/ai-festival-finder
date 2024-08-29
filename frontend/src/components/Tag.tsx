import { twMerge } from "tailwind-merge";

type TagProps = {
	color: string;
	text: string;
};

export const Tag = ({ color, text }: TagProps) => (
	<h4 className="px-2 h-fit border rounded-full text-xs w-fit text-grey-primary border-grey-primary grow-0 shrink-0">
		{text}
	</h4>
);
