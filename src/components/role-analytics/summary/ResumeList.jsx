import { motion } from 'framer-motion';
import { LuImage } from 'react-icons/lu';
import { responses } from '../../../lib/data';
import { GrDocumentPdf } from 'react-icons/gr';

export default function ResumeList() {
    const resume = responses.map(r => r.resume);

    return (
        <div className="w-full max-w-5xl mx-auto bg-[#1c1c1c] rounded-2xl p-6 my-6">
            <div className="mb-4">
                <h2 className="text-white text-lg font-semibold">Upload your Resume</h2>
                <p className="text-gray-400 text-sm">{responses.length} Responses</p>
            </div>

            <div className="max-h-80 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-transparent">
                <div className="space-y-3">
                    {resume.map((resume, index) => (
                        <motion.a
                            key={`${resume.name}-${index}`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.04 }}
                            className="flex items-center gap-4 bg-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm hover:bg-[#333] transition"
                        >
                            <div className="shrink-0">
                                {resume.type === 'pdf' ? (
                                    <GrDocumentPdf className="text-neutral-50 size-5" />
                                ) : (
                                    <LuImage className="text-neutral-50 size-5" />
                                )}
                            </div>

                            <span className="truncate text-green-400 underline cursor-pointer">
                                {resume.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
