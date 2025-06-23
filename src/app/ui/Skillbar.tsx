import { motion } from "framer-motion";

type SkillBarProps = {
    label: React.ReactNode;
    percentage: number;
    color: string;
};

export default function SkillBar({ label, percentage, color }: SkillBarProps) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-700">{label}</span>
                <span className="text-sm font-semibold text-slate-700">{percentage}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
                <motion.div
                    className={`h-3 rounded-full ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}