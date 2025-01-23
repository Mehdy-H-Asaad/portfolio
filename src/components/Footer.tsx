import { footerLinks } from "../data";

export const Footer = () => {
	return (
		<div className="border-t border-t-[1] border-t-gray-600 bg-main-color py-10">
			<div className="container">
				<div className="footer-container text-white flex flex-col gap-8 sm:flex-row sm:gap-0  items-center justify-between">
					<h3 className="text-lg">Copyright © 2023. All rights are reserved</h3>
					<div className="flex gap-4">
						{footerLinks.map((footer, index) => (
							<a
								key={index}
								target="_blank"
								rel="noopener noreferrer"
								href={footer.href}
								className="bg-third-color size-10 rounded-[50%] flex items-center justify-center group hover:bg-opacity-80 transition duration-200"
							>
								{footer.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
