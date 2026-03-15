import { X } from 'lucide-react';
import { useOpeningBuilder } from '../../hooks/useOpeningBuilderContext';

const YEAR_OPTIONS = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

const BRANCH_OPTIONS = [
    'Computer Engineering',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil',
    'Electrical',
];

export default function FormPreviewModal({ onClose }) {
    const { questions } = useOpeningBuilder();

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-zinc-900 border border-white/10 rounded-xl w-full max-w-xl max-h-[85vh] flex flex-col">
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">Form Preview</h2>

                    <X
                        size={18}
                        onClick={onClose}
                        className="cursor-pointer text-zinc-400 hover:text-white"
                    />
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="overflow-y-auto p-6 space-y-6">
                    {/* NAME */}
                    <div className="space-y-2">
                        <p className="text-sm text-white">
                            Enter your name
                            <span className="text-red-400 ml-1">*</span>
                        </p>

                        <input
                            className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm"
                            placeholder="Your name"
                        />
                    </div>

                    {/* YEAR OF STUDY */}
                    <div className="space-y-2">
                        <p className="text-sm text-white">
                            Year of Study
                            <span className="text-red-400 ml-1">*</span>
                        </p>

                        <select className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm">
                            <option value="">Select year</option>

                            {YEAR_OPTIONS.map(year => (
                                <option key={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* PHONE */}
                    <div className="space-y-2">
                        <p className="text-sm text-white">
                            Phone Number
                            <span className="text-red-400 ml-1">*</span>
                        </p>

                        <input
                            className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm"
                            placeholder="Phone number"
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-2">
                        <p className="text-sm text-white">
                            Email Address
                            <span className="text-red-400 ml-1">*</span>
                        </p>

                        <input
                            className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm"
                            placeholder="Email"
                        />
                    </div>

                    {/* BRANCH */}
                    <div className="space-y-2">
                        <p className="text-sm text-white">
                            Select Branch
                            <span className="text-red-400 ml-1">*</span>
                        </p>

                        <select className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm">
                            <option value="">Select branch</option>

                            {BRANCH_OPTIONS.map(branch => (
                                <option key={branch}>{branch}</option>
                            ))}
                        </select>
                    </div>

                    {/* CUSTOM QUESTIONS */}
                    {questions.map(q => (
                        <div key={q.id} className="space-y-2">
                            <p className="text-sm text-white">
                                {q.title}

                                {q.required && <span className="text-red-400 ml-1">*</span>}
                            </p>

                            {q.type === 'short' && (
                                <input className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm" />
                            )}

                            {q.type === 'long' && (
                                <textarea className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-sm" />
                            )}

                            {q.type === 'mcq' &&
                                q.options?.map(opt => (
                                    <label
                                        key={opt.id}
                                        className="flex items-center gap-2 text-sm text-zinc-300"
                                    >
                                        <input type="radio" name={q.id} />

                                        {opt.label}
                                    </label>
                                ))}

                            {q.type === 'multi' &&
                                q.options?.map(opt => (
                                    <label
                                        key={opt.id}
                                        className="flex items-center gap-2 text-sm text-zinc-300"
                                    >
                                        <input type="checkbox" />

                                        {opt.label}
                                    </label>
                                ))}

                            {q.type === 'upload' && (
                                <input type="file" className="text-sm text-zinc-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
