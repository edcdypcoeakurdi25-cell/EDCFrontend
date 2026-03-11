import IndividualField from './IndividualField';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
    enter: direction => ({
        x: direction > 0 ? 40 : -40,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: direction => ({
        x: direction > 0 ? -40 : 40,
        opacity: 0,
    }),
};

export default function IndividualCard({ data, index, direction }) {
    return (
        <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/5 shadow-xl">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.section
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    <IndividualField label="Name" value={data?.name} />
                    <IndividualField label="Year of Study" value={data?.year_of_study} />
                    <IndividualField label="Phone Number" value={data?.phone_number} />
                    <IndividualField label="Email Address" value={data?.email} />
                    <IndividualField label="Branch" value={data?.branch} />
                    <IndividualField label="Prior Experience" value={data?.prior_exp} />
                    <IndividualField label="Skill Level" value={data?.skillLevel} />

                    <IndividualField
                        label="Resume"
                        value={
                            data?.resume ? (
                                <a
                                    href={data.resume.url}
                                    download
                                    className="text-emerald-400 hover:underline"
                                >
                                    {data.resume.name}
                                </a>
                            ) : (
                                'No resume uploaded'
                            )
                        }
                    />
                </motion.section>
            </AnimatePresence>
        </div>
    );
}
