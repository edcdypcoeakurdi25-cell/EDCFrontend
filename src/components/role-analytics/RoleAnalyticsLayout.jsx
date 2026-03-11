import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import AnalyticsHeader from './AnalyticsHeader';
import RoleInfo from './RoleInfo';
import StatsCards from './StatsCards';
import AnalyticsTabs from './AnalyticsTabs';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function RoleAnalyticsLayout() {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 mt-6 px-12 pb-10">
            <motion.div variants={item}>
                <AnalyticsHeader />
            </motion.div>

            <motion.div variants={item}>
                <RoleInfo />
            </motion.div>

            <motion.div variants={item}>
                <StatsCards />
            </motion.div>

            <motion.div variants={item}>
                <AnalyticsTabs />
            </motion.div>

            {/* Nested pages render here */}
            <motion.div variants={item}>
                <Outlet />
            </motion.div>
        </motion.div>
    );
}
