import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function IndividualNavigator({ index, setIndex, setDirection, total }) {
    return (
        <div className="flex items-center justify-between text-sm text-gray-300 bg-neutral-900 px-6 py-4 rounded-xl border border-white/5">
            <button
                onClick={() => {
                    setDirection(-1);
                    setIndex(i => Math.max(i - 1, 0));
                }}
                disabled={index === 0}
                className={`flex items-center gap-2 ${
                    index === 0 ? 'opacity-30' : 'cursor-pointer hover:text-white'
                }`}
            >
                <FaChevronLeft className="size-4" />
                Previous
            </button>

            <span className="text-neutral-400">
                {index + 1} <span className="opacity-60">of</span> {total}
            </span>

            <button
                onClick={() => {
                    setDirection(1);
                    setIndex(i => Math.min(i + 1, total - 1));
                }}
                disabled={index === total - 1}
                className={`flex items-center gap-2 ${
                    index === total - 1 ? 'opacity-30' : 'cursor-pointer hover:text-white'
                }`}
            >
                Next
                <FaChevronRight className="size-4" />
            </button>
        </div>
    );
}
