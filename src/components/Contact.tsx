import { FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/imgs/Hands - Contact.png";
export const Contact = () => {
	return (
		<div className="bg-main-color pt-32 pb-10" id="contact">
			<div className="flex flex-col gap-2">
				<div className="text-blue-color font-[700] text-4xl mx-auto">
					Contact
				</div>
				<p className="text-white sm:mx-auto text-xl mx-10 text-center">
					Feel free to contact me for new opportunities
				</p>
			</div>

			<div className="container">
				<div className="flex flex-col md:flex-row items-center justify-around text-white mt-20">
					<div className="flex flex-col gap-4 items-center md:items-start">
						<h1 className="text-5xl text-center md:text-left">Contact me</h1>
						<p className="text-lg max-w-[31rem] text-center md:text-start">
							I am actively seeking new opportunities. Please feel free to reach
							out to discuss potential roles or collaborations.
						</p>
						<a href="mailto:mehdyasaad.sy.2003@gmail.com" className="">
							<FaEnvelope
								className="animate-bounce bg-blue-color text-white px-2 py-1 my-10 rounded-2xl w-40"
								size={40}
							/>
						</a>
					</div>
					<img src={contactImg} className="img-fluid" />
				</div>
			</div>
		</div>
	);
};
