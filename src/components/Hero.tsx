import personalImg from "../assets/imgs/mehdyA.jpg";
import { FaFile } from "react-icons/fa";
import { socialLinks } from "../data";

export const Hero = () => {
	return (
		<div className="hero bg-main-color lg:h-[calc(100vh-96px)] flex items-center  ">
			<div className="container ">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 py-20 lg:py-0">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3 text-white">
							<h1 className="font-[600] text-5xl">Full-stack Mern Developer</h1>
							<p className="text-xl font-[300] max-w-[450px]">
								Hello, I'm Mehdy Asaad. An Enthusiastic 22 years old Full-stack
								mern developer.
							</p>
						</div>
						<div className="social flex gap-4">
							{socialLinks.map(social => (
								<a
									className={`${social.iconName} bg-third-color group hover:bg-opacity-80 transition duration-200`}
									href={social.href}
									target="_blank"
								>
									{social.icon}
								</a>
							))}
						</div>
						<a
							href="MEHDY_RESUME.pdf"
							download="MEHDY_RESUME.pdf"
							className="cv-download flex items-center justify-center gap-2 text-white hover:bg-blue-950 duration-300"
						>
							<FaFile />
							<span>Download CV</span>
						</a>
					</div>
					<img src={personalImg} className="my-photo" />
				</div>
			</div>
		</div>
	);
};
