"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ExpandableCard({ layoutId }: { layoutId: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{!isOpen && (
				<motion.div
					layoutId={layoutId}
					className="w-full p-4 cursor-pointer"
					onClick={() => setIsOpen(true)}
				>
					<div className="p-4 shadow-lg rounded-2xl">
						<motion.img
							src={"/aichor/home.png"}
							height={200}
							width={400}
							alt=""
						/>
					</div>
				</motion.div>
			)}

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							layoutId={layoutId}
							className=" p-6 rounded-2xl shadow-xl w-full max-w-[900px]"
							onClick={(e) => e.stopPropagation()}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-xl font-semibold">Expanded Modal</h3>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setIsOpen(false)}
								>
									<X className="w-5 h-5" />
								</Button>
							</div>
							<motion.img
								src={"/aichor/home.png"}
								height={400}
								width={1000}
								alt=""
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
