import { motion } from 'framer-motion';
import OpeningCard from './OpeningCard';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const OpeningList = ({ openings, onViewRole }) => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {openings.map(opening => (
                <OpeningCard key={opening.id} opening={opening} onViewRole={onViewRole} />
            ))}
        </motion.div>
    );
};

export default OpeningList;
