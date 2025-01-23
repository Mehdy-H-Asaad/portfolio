import {
	FaLinkedin,
	FaGithub,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
} from "react-icons/fa";
import xClone from "../assets/imgs/x-clone.png";
import revusImg from "../assets/imgs/Revus.png";
import souqakImg from "../assets/imgs/dashboard.png";
import janaDubaiImg from "../assets/imgs/janadubai.vercel.app.png";
import htmlImg from "../assets/imgs/html-1.svg";
import cssImg from "../assets/imgs/css-3.svg";
import javascriptImg from "../assets/imgs/logo-javascript.svg";
import typescriptImg from "../assets/imgs/typescript.svg";
import taildwindImg from "../assets/imgs/tailwind-css-2.svg";
import bootstrapImg from "../assets/imgs/bootstrap-5-1.svg";
import reactImg from "../assets/imgs/react-2.svg";
import nextjsImg from "../assets/imgs/next-js-svgrepo-com.svg";
import mongodbImg from "../assets/imgs/mongodb-icon-2.svg";
import expressImg from "../assets/imgs/express-svgrepo-com.svg";
import nodeJsImg from "../assets/imgs/nodejs-icon.svg";
import githubImg from "../assets/imgs/github-icon-1-logo-svgrepo-com (1).svg";

export const footerLinks = [
	{
		href: "https://www.linkedin.com/in/mehdy-asaad/",
		icon: (
			<FaLinkedin className="text-[#0077b5] duration-200 group-hover:translate-y-[-0.25rem]" />
		),
	},
	{
		href: "https://github.com/Mehdy-H-Asaad",
		icon: (
			<FaGithub className="text-[#6cc644] duration-200 group-hover:translate-y-[-0.25rem]" />
		),
	},
	{
		href: "mailto:mehdyasaad.sy.2003@gmail.com",
		icon: (
			<FaEnvelope className="text-[#d44638] duration-200 group-hover:translate-y-[-0.25rem]" />
		),
	},
];

export const socialLinks = [
	{
		href: "https://www.facebook.com/profile.php?id=100003596678477",
		icon: (
			<FaFacebook className="duration-200 group-hover:translate-y-[-0.25rem]" />
		),
		iconName: "facebook",
	},
	{
		href: "https://www.linkedin.com/in/mehdy-asaad/",
		icon: (
			<FaLinkedin className="duration-200 group-hover:translate-y-[-0.25rem]" />
		),
		iconName: "linkedin",
	},
	{
		href: "https://github.com/Mehdy-H-Asaad",
		icon: (
			<FaGithub className="duration-200 group-hover:translate-y-[-0.25rem]" />
		),
		iconName: "github",
	},
	{
		href: "https://www.instagram.com/mehdi___asaad/",
		icon: (
			<FaInstagram className="duration-200 group-hover:translate-y-[-0.25rem]" />
		),
		iconName: "instagram",
	},
	{
		href: "mailto:mehdyasaad.sy.2003@gmail.com",
		icon: (
			<FaEnvelope className="duration-200 group-hover:translate-y-[-0.25rem]" />
		),
		iconName: "email",
	},
];

export const navLinks = [
	{
		href: "#",
		title: "Home",
	},
	{
		href: "#about",
		title: "About",
	},
	{
		href: "#projects",
		title: "Projects",
	},
	{
		href: "#contact",
		title: "Contact",
	},
];

export const projectsLinks = [
	{
		gitHubLink: "https://github.com/Mehdy-H-Asaad/eCommerceMern",
		demoLink: "",
		img: souqakImg,
		header: "SOUQAK (Under development)",
		description: `Souqk is an e-commerce application where users can log in to buy and sell items, similar to platforms like Dubizzle or eBay. It utilizes HTML, CSS, TypeScript, React, React Query, ShadCN, and Tailwind on the frontend, while the backend is powered by Node.js and MongoDB, following clean architecture principles.`,
	},
	{
		gitHubLink: "https://github.com/Mehdy-H-Asaad/janadubai",
		demoLink: "https://janadubai.vercel.app/",
		img: janaDubaiImg,
		header: "Jana Dubai",
		description: `Jana Dubai is a website focused on providing furniture for desks, cinema halls, and workplace furnishing. As a frontend developer, I used HTML, CSS, TypeScript, React, React Query, ShadCN and Tailwind. The website serves a big company in Dubai with many clients.`,
	},

	{
		gitHubLink: "https://github.com/Mehdy-H-Asaad/X-clone?tab=readme-ov-file",
		demoLink: "",
		img: xClone,
		header: "X-clone",
		description: `x-clone is a basic social media app inspired by X, built using the MERN stack: React, React query TypeScript, Node.js, MongoDB, and Express. It features essential social media functions like adding and removing posts, commenting, notifications, following/unfollowing, and suggested users. This was my first attempt at full-stack development.`,
	},
	{
		gitHubLink: "https://github.com/Mehdy-H-Asaad/RevusCarWebsite",
		demoLink: "https://mehdy-h-asaad.github.io/RevusCarWebsite/",
		img: revusImg,
		header: "REVUS",
		description: `Revus is a car website and my first project when learning React. I focused on design efficiency using CSS and styled components to create visually appealing layouts. It's a simple app showcasing my design skills.`,
	},
];

export const techStack = [
	{
		img: htmlImg,
		title: "Html 5",
	},
	{
		img: cssImg,
		title: "CSS 3",
	},
	{
		img: javascriptImg,
		title: "Javascript",
	},
	{
		img: typescriptImg,
		title: "Typescript",
	},
	{
		img: taildwindImg,
		title: "Taildwind CSS",
	},
	{
		img: bootstrapImg,
		title: "Bootstrap",
	},
	{
		img: reactImg,
		title: "React",
	},
	{
		img: nextjsImg,
		title: "Next.js",
	},
	{
		img: mongodbImg,
		title: "MongoDB",
	},
	{
		img: expressImg,
		title: "Express",
	},
	{
		img: nodeJsImg,
		title: "Node.js",
	},
	{
		img: githubImg,
		title: "Github",
	},
];
