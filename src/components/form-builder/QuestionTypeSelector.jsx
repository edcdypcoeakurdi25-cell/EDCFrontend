import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { QUESTION_TYPES } from '../../constants/questionTypes';

export default function QuestionTypeSelector({ value, onChange }) {
    const [open, setOpen] = useState(false);

    const selected = QUESTION_TYPES.find(t => t.value === value);

    const Icon = selected.icon;

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 flex justify-between items-center text-sm"
            >
                <span className="flex items-center gap-2">
                    <Icon size={14} />
                    {selected.label}
                </span>

                <ChevronDown size={14} />
            </button>

            {open && (
                <div className="absolute mt-2 w-full bg-zinc-900 border border-white/10 rounded-lg overflow-hidden z-10">
                    {QUESTION_TYPES.map(type => {
                        const TypeIcon = type.icon;

                        return (
                            <button
                                key={type.value}
                                onClick={() => {
                                    onChange(type.value);
                                    setOpen(false);
                                }}
                                className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm hover:bg-zinc-800"
                            >
                                <TypeIcon size={14} />
                                {type.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
