interface SkillBarProps {
    label: string;
    percentage: number;
    color: string;
}

export default function SkillBar({
                                     label,
                                     percentage,
                                     color,
                                 }: SkillBarProps) {
    return (
        <div className="w-full mb-4">
            <div className="text-sm mb-1 text-white">{label}</div>
            <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4 overflow-hidden">
                <div
                    className={`h-3 sm:h-4 ${color} rounded-full flex items-center justify-center animated-stripes text-xs sm:text-sm`}
                    style={{ width: `${percentage}%` }}
                >
                    <span className="text-percentage">{percentage}%</span>
                </div>
            </div>
        </div>
    );
}