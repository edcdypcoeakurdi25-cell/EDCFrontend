import { motion } from 'framer-motion';

const listContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const listItem = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
};

export default function Cards({ title, items }) {
    return (
        <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-2xl p-6 my-6">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-white text-lg font-semibold">{title}</h2>

                <p className="text-gray-400 text-sm">{items.length} Responses</p>
            </div>

            {/* Scrollable list */}
            <div className="max-h-80 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-transparent">
                <motion.div
                    variants={listContainer}
                    initial="hidden"
                    animate="show"
                    className="space-y-3"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={listItem}
                            className="bg-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm"
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
