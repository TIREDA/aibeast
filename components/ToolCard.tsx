
import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
          <div>
            <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <i className="fa-solid fa-star"></i>
              <span className="font-medium text-slate-700">{tool.rating}</span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {tool.description}
        </p>

        <div className="space-y-2 mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">核心亮点</p>
          <ul className="grid grid-cols-1 gap-1">
            {tool.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                <i className="fa-solid fa-check text-blue-500 text-xs"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">适合人群:</span>
            <span className="font-medium text-slate-900">{tool.bestFor}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">价格:</span>
            <span className="font-medium text-blue-600">{tool.pricing}</span>
          </div>
        </div>

        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 block w-full text-center bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          查看官网
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
