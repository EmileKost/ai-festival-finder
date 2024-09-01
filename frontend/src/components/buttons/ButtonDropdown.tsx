import { useMemo } from "react";

type ButtonDropDownProps = {
	list: (string | number | boolean)[];
};

export const ButtonDropDown = ({ list }: ButtonDropDownProps) => {
	const filteredList = useMemo(() => {
		// Logic for filtering here
		return list;
	}, [list]);

	return (
		<button className="py-4 px-7 rounded-full border border-white-primary bg-transparent">
			{list[0]}
		</button>
	);
};

// TODO: Use the useMemo() hook to cache the filtered list of countries coming from the countries API
