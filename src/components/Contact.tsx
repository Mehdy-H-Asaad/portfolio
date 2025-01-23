import { FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/imgs/Hands - Contact.png";
import { motion } from "framer-motion";
export const Contact = () => {
	return (
		<div className="bg-main-color pt-32 pb-10" id="contact">
			<div className="flex flex-col gap-2">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-blue-color font-[700] text-4xl mx-auto"
				>
					Contact
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-white sm:mx-auto text-xl mx-10 text-center"
				>
					Feel free to contact me for new opportunities
				</motion.p>
			</div>

			<div className="container">
				<div className="flex flex-col md:flex-row items-center justify-around text-white mt-20">
					<motion.div
						initial={{ x: -60, opacity: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="flex flex-col gap-4 items-center md:items-start"
					>
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
					</motion.div>
					<motion.img
						initial={{ x: 60, opacity: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						src={contactImg}
						className="img-fluid"
					/>
				</div>
			</div>
		</div>
	);
};
