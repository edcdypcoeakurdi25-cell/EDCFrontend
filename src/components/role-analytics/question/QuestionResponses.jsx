import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { responses } from '../../../lib/data';

const groupedOptions = {
    year_of_study: ['First Year', 'Second Year', 'Third Year', 'Fourth Year'],
    branch: ['CS', 'IT', 'ENTC', 'AIDS', 'MECH', 'CIVIL', 'RNA', 'INSTRU'],
    skillLevel: ['1', '2', '3', '4', '5'],
};

export default function QuestionResponses({ question }) {
    const data = useMemo(() => {
        if (question.type === 'grouped') {
            const options = groupedOptions[question.key] || {};

            const countMap = {};
            options.forEach(opt => (countMap[opt] = 0));

            responses.forEach(r => {
                const value = r[question.key];
                if (value && countMap.hasOwnProperty(value)) {
                    countMap[value] += 1;
                }
            });

            return options.map(label => ({
                label,
                count: countMap[label],
            }));
        }

        return responses.map(r => (question.key === 'resume' ? r.resume : r[question.key]));
    }, [question]);

    return (
        <div className="rounded-2xl bg-[#1c1c1c] p-6 border border-white/5">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-white">{question.label}</h2>
            </div>

            <div className="space-y-3">
                {question.type === 'grouped'
                    ? data.map((item, index) => (
                          <motion.div
                              key={item.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-center justify-between rounded-xl bg-neutral-900 px-5 py-3"
                          >
                              <span className="text-sm text-white">{item.label}</span>
                              <span className="text-sm text-white">{item.count} Responses</span>
                          </motion.div>
                      ))
                    : data.map((value, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm"
                          >
                              {question.key === 'resume' ? (
                                  <a
                                      href={value.url}
                                      download
                                      className="text-emerald-400 hover:underline"
                                  >
                                      {value.name}
                                  </a>
                              ) : (
                                  <span className="text-white">{value}</span>
                              )}
                          </motion.div>
                      ))}
            </div>
        </div>
    );
}
