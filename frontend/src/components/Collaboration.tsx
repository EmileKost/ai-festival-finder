import { Collaborator } from "@/types/collaborator";

type CollaborationProps = {
	collaborators: Collaborator[];
};

export const Collaboration = ({ collaborators }: CollaborationProps) => {
	return (
		<div className="flex gap-4 items-center absolute bottom-3 left-2 md:left-5">
			{collaborators &&
				collaborators.length > 0 &&
				collaborators.map((collaborator) => (
					<div
						key={collaborator.text}
						className="flex gap-2 items-center">
						{collaborator.icon}
						<h4 className="text-grey-primary hidden md:block text-lg">
							{collaborator.text}
						</h4>
					</div>
				))}
		</div>
	);
};
