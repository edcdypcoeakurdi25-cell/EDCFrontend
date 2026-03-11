import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import { mockOpenings } from '../lib/data';
import { useNavigate } from 'react-router-dom';

const ReleaseOpeningPage = () => {
    const navigate = useNavigate();

    const viewRole = () => navigate('/role_analytics');
    const deleteRole = () => {};
    const createNewOpening = () => navigate('/new_opening_form');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.28,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28 }}
            className="w-full px-8"
        >
            <div className="max-w-6xl mx-auto py-6">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-10 tracking-tight"
                >
                    Release Openings
                </motion.h1>

                {/* Create Opening */}
                <div className="mb-12">
                    <h2 className="text-sm tracking-wider text-zinc-400 mb-4">
                        Create New Opening
                    </h2>

                    <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        onClick={createNewOpening}
                        className="w-64 h-44 bg-zinc-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/15 hover:bg-zinc-800/70"
                    >
                        <FaPlus className="size-7 text-zinc-300" />
                        <span className="text-sm text-zinc-400">Create Opening</span>
                    </motion.div>
                </div>

                {/* Active Openings */}
                <div>
                    <h2 className="text-sm tracking-wider text-zinc-400 mb-4">
                        Active Openings
                    </h2>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {mockOpenings.map(opening => (
                            <motion.div
                                key={opening.id}
                                variants={item}
                                whileHover={{ y: -3 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                className="bg-zinc-900 border border-white/5 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-white/10 hover:bg-zinc-800/50"
                            >
                                {/* Role Info */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{opening.title}</h3>

                                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                                        <span>{opening.department}</span>
                                        <span>{opening.location}</span>
                                        <span>{opening.applicants} applicants</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-6 text-sm">
                                    <button
                                        className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
                                        onClick={viewRole}
                                    >
                                        View Role
                                    </button>

                                    <button
                                        className="text-red-400 hover:text-red-300 font-medium transition-colors cursor-pointer"
                                        onClick={deleteRole}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ReleaseOpeningPage;
