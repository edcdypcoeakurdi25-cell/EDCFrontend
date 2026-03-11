import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function QuestionNavigation({ questionIndex, total, setQuestionIndex }) {
    return (
        <div className="flex items-center gap-4 text-sm text-gray-300">
            <FaChevronLeft
                onClick={() => setQuestionIndex(i => Math.max(i - 1, 0))}
                className={`size-5 ${
                    questionIndex === 0 ? 'opacity-30' : 'cursor-pointer hover:text-white'
                }`}
            />

            <span>
                {questionIndex + 1}
                <span className="opacity-60"> of </span>
                {total}
            </span>

            <FaChevronRight
                onClick={() => setQuestionIndex(i => Math.min(i + 1, total - 1))}
                className={`size-5 ${
                    questionIndex === total - 1 ? 'opacity-30' : 'cursor-pointer hover:text-white'
                }`}
            />
        </div>
    );
}
