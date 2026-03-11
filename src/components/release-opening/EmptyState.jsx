import { Briefcase } from 'lucide-react';

const EmptyState = () => {
    return (
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-10 text-center">
            <Briefcase className="mx-auto mb-4 text-zinc-500" size={36} />

            <h3 className="text-lg font-semibold mb-2">No openings yet</h3>

            <p className="text-zinc-400 text-sm">
                Create your first job opening to start receiving applicants.
            </p>
        </div>
    );
};

export default EmptyState;
