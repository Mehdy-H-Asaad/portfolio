import { motion } from "framer-motion";
import { techStack } from "../data";
import { useState } from "react";

export const TechStack = () => {
	const [completed, setCompleted] = useState<boolean>(false);
	const [completedItems, setCompletedItems] = useState<number>(0);

	const staggerVariants = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2 * index,
			},
		}),
	};

	const handleAnimationComplete = () => {
		setCompletedItems(prev => prev + 1);
	};

	if (!completed && completedItems === techStack.length) {
		setCompleted(true);
	}

	return (
		<div className="bg-main-color" id="about">
			<div className="flex flex-col gap-2">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-blue-color font-[700] text-4xl mx-auto"
				>
					Tech Stack
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-white sm:mx-auto text-xl mx-10 text-center"
				>
					My tech stack as a full-stack MERN developer
				</motion.p>
			</div>

			<div className="container">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-20 mt-20">
					{techStack.map(tech => (
						<motion.div
							variants={staggerVariants}
							initial="initial"
							custom={tech.id}
							whileInView="animate"
							key={tech.id}
							viewport={{ once: true }}
							onAnimationComplete={handleAnimationComplete}
							className={`cursor-pointer  ${
								completed ? "duration-300  hover:-mt-4" : ""
							} gap-4 flex flex-col items-center justify-center`}
						>
							<img src={tech.img} className="size-28 text-white" alt="" />
							<div className="text-white text-[600]">{tech.title}</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
