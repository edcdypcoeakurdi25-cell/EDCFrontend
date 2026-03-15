import { useState } from 'react';
import { motion } from 'framer-motion';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { GripVertical, Trash2, Pencil, Check, X } from 'lucide-react';

import QuestionTypeSelector from './QuestionTypeSelector';
import QuestionUploadConfig from './QuestionUploadConfig';
import QuestionOptionsEditor from './QuestionOptionsEditor';
import { QUESTION_TYPES } from '../../constants/questionTypes';
import { validateQuestion } from '../../lib/validateQuestions';
import { useOpeningBuilder } from '../../hooks/useOpeningBuilderContext';

export default function QuestionCard({ question, overlay = false }) {
    const { setQuestions } = useOpeningBuilder();

    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editField, setEditField] = useState(question);

    /* eslint-disable react-hooks/rules-of-hooks */
    const sortable = !overlay ? useSortable({ id: question.id }) : {};

    const { attributes, listeners, setNodeRef, transform, transition, isOver } = sortable;

    const style = overlay
        ? {}
        : {
              transform: CSS.Transform.toString(transform),
              transition,
          };

    const typeData = QUESTION_TYPES.find(t => t.value === question.type);
    const TypeIcon = typeData?.icon;

    const removeField = id => {
        setQuestions(prev => prev.filter(q => q.id !== id));
    };

    const saveEdit = () => {
        const validationError = validateQuestion(editField);

        if (validationError) {
            setError(validationError);
            return;
        }

        setQuestions(prev => prev.map(q => (q.id === question.id ? editField : q)));

        setError(null);
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setEditField(question);
        setIsEditing(false);
    };

    return (
        <motion.div
            data-id={question.id}
            ref={!overlay ? setNodeRef : undefined}
            style={style}
            layout={!overlay}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ layout: { duration: 0.25 } }}
            className={`relative bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 flex gap-3
            ${overlay ? 'shadow-2xl scale-105 cursor-grabbing' : ''}`}
        >
            {/* Drop indicator */}
            {isOver && !overlay && (
                <div className="absolute -top-2 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}

            {/* Drag Handle */}
            {!overlay && (
                <div
                    {...attributes}
                    {...listeners}
                    className="flex items-start pt-1 cursor-grab active:cursor-grabbing"
                >
                    <GripVertical size={16} className="text-zinc-500" />
                </div>
            )}

            {/* CONTENT */}
            <div className="flex-1">
                {!isEditing && (
                    <>
                        <p className="text-sm text-white flex items-center gap-2">
                            {question.title}
                            {question.required && <span className="text-red-400 text-xs">*</span>}
                        </p>

                        <p className="text-xs text-zinc-500 capitalize mt-1 flex items-center gap-1">
                            {TypeIcon && <TypeIcon size={12} />}
                            {typeData?.label}
                        </p>

                        {(question.type === 'mcq' || question.type === 'multi') && question.options?.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {question.options.map(opt => (
                                    <span
                                        key={opt.id}
                                        className="bg-zinc-700 text-xs px-2 py-1 rounded"
                                    >
                                        {opt.label}
                                    </span>
                                ))}
                            </div>
                        )}

                        {question.type === 'upload' && (
                            <p className="text-xs text-zinc-500 mt-2">
                                Allowed: {question.config?.type}
                            </p>
                        )}
                    </>
                )}

                {isEditing && (
                    <div className="space-y-4">
                        <input
                            value={editField.title}
                            onChange={e =>
                                setEditField(prev => ({
                                    ...prev,
                                    title: e.target.value,
                                }))
                            }
                            className="w-full bg-zinc-700 border border-white/10 rounded-lg px-3 py-2 text-sm"
                        />

                        <QuestionTypeSelector
                            value={editField.type}
                            onChange={type =>
                                setEditField(prev => ({
                                    ...prev,
                                    type,
                                }))
                            }
                        />

                        {/* Required Toggle */}
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-zinc-400">Required</span>

                            <button
                                onClick={() =>
                                    setEditField(prev => ({
                                        ...prev,
                                        required: !prev.required,
                                    }))
                                }
                                className={`w-10 h-5 rounded-full relative transition ${
                                    editField.required ? 'bg-white' : 'bg-zinc-700'
                                }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-4 h-4 bg-black rounded-full transition ${
                                        editField.required ? 'left-5' : 'left-1'
                                    }`}
                                />
                            </button>
                        </div>

                        {(editField.type === 'mcq' || editField.type === 'multi') && (
                            <QuestionOptionsEditor
                                options={editField.options}
                                setOptions={opts =>
                                    setEditField(prev => ({
                                        ...prev,
                                        options: opts,
                                    }))
                                }
                            />
                        )}

                        {editField.type === 'upload' && (
                            <QuestionUploadConfig
                                config={editField.config}
                                setConfig={cfg =>
                                    setEditField(prev => ({
                                        ...prev,
                                        config: cfg,
                                    }))
                                }
                            />
                        )}

                        {error && <p className="text-red-400 text-xs">{error}</p>}
                    </div>
                )}
            </div>

            {/* ACTIONS */}
            {!overlay && !isEditing && (
                <div className="flex items-start gap-3">
                    <Pencil
                        size={16}
                        onClick={() => setIsEditing(true)}
                        className="text-zinc-400 cursor-pointer hover:text-white"
                    />

                    <Trash2
                        size={16}
                        onClick={() => removeField(question.id)}
                        className="text-red-400 cursor-pointer"
                    />
                </div>
            )}

            {!overlay && isEditing && (
                <div className="flex items-start gap-3">
                    <Check size={16} onClick={saveEdit} className="text-green-400 cursor-pointer" />

                    <X size={16} onClick={cancelEdit} className="text-zinc-400 cursor-pointer" />
                </div>
            )}
        </motion.div>
    );
}
