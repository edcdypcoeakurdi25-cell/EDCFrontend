export default function IndividualField({ label, value }) {
    return (
        <div className="bg-neutral-800/60 rounded-xl px-4 py-4 border border-white/5">
            <p className="text-xs text-gray-400 mb-1">{label}</p>

            <div className="text-white text-sm">{value ?? '—'}</div>
        </div>
    );
}
