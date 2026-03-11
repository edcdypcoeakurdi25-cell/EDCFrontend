import { motion } from 'framer-motion';

import SkillChart from '../../components/role-analytics/summary/SkillChart';
import ResumeList from '../../components/role-analytics/summary/ResumeList';
import SummaryCards from '../../components/role-analytics/summary/SummaryCards';
import SummaryDownload from '../../components/role-analytics/summary/SummaryDownload';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35 },
    },
};

export default function SummaryPage() {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 mt-6">
            <motion.div variants={item}>
                <SummaryDownload />
            </motion.div>

            <motion.div variants={item}>
                <SummaryCards />
            </motion.div>

            <motion.div variants={item}>
                <SkillChart />
            </motion.div>

            <motion.div variants={item}>
                <ResumeList />
            </motion.div>

            <motion.div variants={item} className="flex justify-end">
                <SummaryDownload />
            </motion.div>
        </motion.div>
    );
}
