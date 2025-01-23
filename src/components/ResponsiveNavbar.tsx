import { IoIosMenu } from "react-icons/io";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { navLinks } from "@/data";

export const ResponsiveNavbar = () => {
	return (
		<div className="flex md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					{/* <Button className="bg-golden hover:bg-golden text-black"> */}
					<IoIosMenu
						className="block md:hidden text-white cursor-pointer"
						size={28}
					/>
					{/* </Button> */}
				</SheetTrigger>

				<SheetContent className="bg-black text-white" side={"left" as const}>
					<SheetHeader>
						<SheetTitle className="text-white mb-10">Navbar</SheetTitle>
					</SheetHeader>
					<div className="grid gap-10 py-4">
						{navLinks.map(nav => (
							<SheetClose key={nav.href} asChild>
								<a className="text-white font-[600] link w-fit" href={nav.href}>
									{nav.title}
								</a>
							</SheetClose>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
