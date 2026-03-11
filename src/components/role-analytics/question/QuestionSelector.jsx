import { useState, useRef, useEffect } from 'react';
import { RiExpandUpDownFill } from 'react-icons/ri';

export default function QuestionSelector({ questions, questionIndex, setQuestionIndex }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const question = questions[questionIndex];

    /* Close dropdown when clicking outside */
    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-105">
            {/* Selector */}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex w-full items-center justify-between bg-neutral-800 px-4 py-3 rounded-lg cursor-pointer hover:bg-neutral-700 transition"
            >
                <span className="text-white text-sm">{question.label}</span>

                <RiExpandUpDownFill
                    className={`size-4 opacity-70 transition ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-20 w-full mt-2 bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden shadow-lg">
                    {questions.map((q, i) => (
                        <button
                            key={q.key}
                            onClick={() => {
                                setQuestionIndex(i);
                                setIsOpen(false);
                            }}
                            className={`block w-full px-4 py-2 text-left text-sm transition ${
                                i === questionIndex
                                    ? 'bg-neutral-700 text-white'
                                    : 'text-gray-300 hover:bg-neutral-700'
                            }`}
                        >
                            {q.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
