import { AlignLeft, AlignJustify, ListChecks, Upload, CheckSquare } from 'lucide-react';

export const QUESTION_TYPES = [
    {
        value: 'short',
        label: 'Short Answer',
        icon: AlignLeft,
    },
    {
        value: 'long',
        label: 'Long Answer',
        icon: AlignJustify,
    },
    {
        value: 'mcq',
        label: 'Single Choice',
        icon: ListChecks,
    },
    {
        value: 'multi',
        label: 'Multiple Select',
        icon: CheckSquare,
    },
    {
        value: 'upload',
        label: 'File Upload',
        icon: Upload,
    },
];
