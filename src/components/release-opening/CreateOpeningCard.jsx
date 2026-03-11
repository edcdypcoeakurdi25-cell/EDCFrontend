import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';

const CreateOpeningCard = ({ onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={onClick}
            className="w-64 h-44 bg-zinc-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/15 hover:bg-zinc-800/70"
        >
            <FaPlus className="size-7 text-zinc-300" />
            <span className="text-sm text-zinc-400">Create Opening</span>
        </motion.div>
    );
};

export default CreateOpeningCard;
