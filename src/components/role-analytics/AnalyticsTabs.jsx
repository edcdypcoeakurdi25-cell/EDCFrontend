import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const tabs = [
    { label: 'Summary', path: 'summary' },
    { label: 'Question', path: 'question' },
    { label: 'Individual', path: 'individual' },
];

export default function AnalyticsTabs() {
    return (
        <div className="flex justify-between items-center px-8 py-4 border-b border-white/10">
            {tabs.map(tab => (
                <NavLink key={tab.path} to={tab.path}>
                    {({ isActive }) => (
                        <motion.span
                            animate={{ color: isActive ? '#22c55e' : '#888888' }}
                            whileHover={{ color: '#22c55e' }}
                            className="text-md font-medium cursor-pointer"
                        >
                            {tab.label}
                        </motion.span>
                    )}
                </NavLink>
            ))}
        </div>
    );
}
