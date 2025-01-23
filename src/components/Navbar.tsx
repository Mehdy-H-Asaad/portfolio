import { navLinks } from "../data";
import { ResponsiveNavbar } from "./ResponsiveNavbar";

export const Navbar = () => {
	return (
		<div className=" header sticky top-0 z-10 bg-main-color h-24 flex items-center">
			<div className="container ">
				<div className="flex items-center justify-between">
					<a href="#">
						<span className="font-bold text-2xl text-white ">MehdyDev</span>
					</a>
					<div className=" items-center gap-16 hidden md:flex">
						{navLinks.map(nav => (
							<a
								key={nav.id}
								className="text-white font-[600] link"
								href={nav.href}
							>
								{nav.title}
							</a>
						))}
					</div>

					<ResponsiveNavbar />
				</div>
			</div>
		</div>
	);
};
