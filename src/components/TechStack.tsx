import { techStack } from "../data";

export const TechStack = () => {
	return (
		<div className="bg-main-color" id="about">
			<div className="flex flex-col gap-2">
				<div className="text-blue-color font-[700] text-4xl mx-auto">
					Tech Stack
				</div>
				<p className="text-white sm:mx-auto text-xl mx-10 text-center">
					My tech stack as a full-stack mern developer
				</p>
			</div>

			<div className="container">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-20 mt-20">
					{techStack.map(tech => (
						<div className="cursor-pointer duration-300 hover:-mt-4 rounded-md gap-4 flex flex-col items-center justify-center">
							<img src={tech.img} className="size-28 text-white" alt="" />
							<div className="text-white text-[600]">{tech.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
