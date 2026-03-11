import { AlertTriangle } from 'lucide-react';

const ErrorState = () => {
    return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center">
            <AlertTriangle className="mx-auto mb-4 text-red-400" size={32} />

            <h3 className="text-lg font-semibold mb-2 text-red-300">Failed to load openings</h3>

            <p className="text-red-200/70 text-sm">Something went wrong while fetching data.</p>
        </div>
    );
};

export default ErrorState;
