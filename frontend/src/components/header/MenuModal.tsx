import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type MenuModalProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuModal = ({ isOpen, setIsOpen }: MenuModalProps) => {
	return (
		<div>
			<div>I am the modal</div>
		</div>
	);
};
