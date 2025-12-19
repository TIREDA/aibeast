
import React, { useState } from 'react';
import { AI_TOOLS_DATA } from './constants';
import ToolCard from './components/ToolCard';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'foreign' | 'domestic'>('all');

  const filteredTools = AI_TOOLS_DATA.filter(tool => {
    if (filter === 'all') return true;
    if (filter === 'foreign') return ['cursor', 'github-copilot', 'windsurf'].includes(tool.id);
    if (filter === 'domestic') return ['trae', 'comate', 'lingma'].includes(tool.id);
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-semibold mb-6">
          <i className="fa-solid fa-bolt mr-2"></i>
          2025 顶级 AI 编程工具深度测评
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          哪个 AI 编程软件<span className="text-blue-600">最懂你</span>?
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          从 Cursor 到 GitHub Copilot，再到国产黑马，我们为你整理了当下最顶尖的 AI 代码助手，助你效率翻倍。
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Tool Grid */}
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <i className="fa-solid fa-list-check text-blue-500"></i>
              工具列表
            </h2>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {(['all', 'foreign', 'domestic'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    filter === f 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {f === 'all' ? '全部' : f === 'foreign' ? '国际领先' : '国产精选'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">不知道选哪一个？</h3>
                <p className="opacity-90 mb-6">
                  每个人的编程习惯不同，项目需求各异。我们建议您先尝试目前最火的 Cursor，或使用我们的 AI 选型顾问获取建议。
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                    开始测评
                  </button>
                  <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition-colors">
                    查看对比表
                  </button>
                </div>
              </div>
              <div className="hidden md:block w-32 h-32 text-8xl opacity-20">
                <i className="fa-solid fa-code"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Consultant Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="sticky top-8">
            <AIConsultant />
            
            <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-bold mb-2">💡 专家建议</h4>
                <p className="text-sm text-slate-400 mb-4">
                  "如果你是资深开发者，Cursor 的代码库索引能力是目前无法替代的。如果你在大型企业内网工作，可以考虑 Comate 的私有化方案。"
                </p>
                <span className="text-xs font-semibold text-blue-400">—— 技术架构师 老王</span>
              </div>
              <i className="fa-solid fa-quote-right absolute -right-4 -bottom-4 text-7xl text-white/5 pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2025 AI 编程助手指南 - 由 Gemini 3 Pro 驱动</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-600 transition-colors">关于我们</a>
          <a href="#" className="hover:text-blue-600 transition-colors">工具提报</a>
          <a href="#" className="hover:text-blue-600 transition-colors">隐私政策</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
