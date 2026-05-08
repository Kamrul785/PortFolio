import React from "react";
import useCounter from "./hooks/useCounter";
import ScrollReveal from "./ScrollReveal";

const StatCard = ({ stat, index }) => {
  const [count, ref] = useCounter(stat.value, 2000);

  const displayValue = () => {
    if (stat.label === "CGPA") {
      return "3.98";
    }
    return count + (stat.suffix || "");
  };

  return (
    <ScrollReveal delay={index * 100}>
      <div ref={ref} className="text-center group">
        <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
            <stat.icon size={40} className="text-blue-500" />
          </div>
        </div>
        <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {displayValue()}
        </div>
        <div className="text-gray-500 font-medium">{stat.label}</div>
      </div>
    </ScrollReveal>
  );
};

export default StatCard;
