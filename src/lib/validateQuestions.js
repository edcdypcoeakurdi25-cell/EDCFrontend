export function validateQuestion(question) {
    if (!question.title || question.title.trim().length === 0) {
        return 'Question title is required';
    }

    if (question.type === 'mcq' || question.type === 'multi') {
        if (!question.options || question.options.length < 2) {
            return 'Multiple choice questions require at least 2 options';
        }
    }

    if (question.type === 'upload') {
        if (!question.config || !question.config.type) {
            return 'Upload question must define allowed file type';
        }
    }

    return null;
}
