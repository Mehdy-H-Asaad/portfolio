import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";
import { projectsLinks } from "../data";

export const Projects = () => {
	return (
		<div className="bg-main-color pt-32" id="projects">
			<div className="flex flex-col gap-2">
				<div className="text-blue-color font-[700] text-4xl mx-auto">
					Projects
				</div>
				<p className="text-white text-xl sm:mx-auto mx-10 text-center">
					Here are some of my projects
				</p>
			</div>

			<div className="container">
				<div className="box grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
					{projectsLinks.map(project => (
						<div className="flex flex-col text-white">
							<a
								target={!project.demoLink ? "_self" : "_blank"}
								href={!project.demoLink ? "#" : project.demoLink}
							>
								<img src={project.img} className=" object-cover" />
							</a>
							<div className="flex flex-col gap-4 mt-4">
								<h3 className="font-[600] text-2xl">- {project.header}</h3>
								<p className="text-[#aaa] min-h-32">{project.description}</p>
							</div>
							<div className="links flex gap-16 my-10">
								<a
									href={project.gitHubLink}
									target="_blank"
									className="flex items-center gap-2 duration-300 hover:text-[#6cc644]"
								>
									<FaGithub size={20} className="text-[#6cc644]" />
									<span>Code</span>
								</a>
								<a
									target={!project.demoLink ? "_self" : "_blank"}
									href={!project.demoLink ? "#" : project.demoLink}
									className="flex items-center gap-2 duration-300 hover:text-blue-color"
								>
									<FaUpRightFromSquare size={20} className="text-blue-color" />
									<span>View</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
