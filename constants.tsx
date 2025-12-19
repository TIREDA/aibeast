
import { AITool } from './types';

export const AI_TOOLS_DATA: AITool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    logo: 'https://picsum.photos/seed/cursor/200/200',
    description: '目前最受欢迎的 AI 原生 IDE，基于 VS Code 构建，深度集成了 Claude 3.5 Sonnet。',
    features: ['全库索引 (Codebase Indexing)', '智能预测下一行', 'AI 终端命令', '代码重构建议'],
    bestFor: '追求最强 AI 原生体验的开发者',
    pricing: '免费版 / $20 每月',
    url: 'https://cursor.sh',
    rating: 4.9
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    logo: 'https://picsum.photos/seed/github/200/200',
    description: 'AI 编程助手的鼻祖，拥有庞大的用户群和深度的 GitHub 生态集成。',
    features: ['多 IDE 支持', 'Copilot Chat', '代码库理解', '企业级安全管控'],
    bestFor: '企业用户及习惯现有 IDE 插件的开发者',
    pricing: '$10 每月起',
    url: 'https://github.com/features/copilot',
    rating: 4.7
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    logo: 'https://picsum.photos/seed/windsurf/200/200',
    description: 'Codeium 推出的 Agent 驱动型 IDE，强调“流程 (Flow)”概念，支持多文件协同。',
    features: ['Flow 模式', '深度上下文解析', '极速响应', '跨文件代码生成'],
    bestFor: '喜欢 Agent 自动化协作的极客',
    pricing: '免费版 / 付费订阅',
    url: 'https://codeium.com/windsurf',
    rating: 4.8
  },
  {
    id: 'trae',
    name: 'Trae',
    logo: 'https://picsum.photos/seed/trae/200/200',
    description: '字节跳动推出的自适应 AI IDE，专为开发者效率设计。',
    features: ['自适应上下文', 'Builder 模式', '中文支持友好', '多模型切换'],
    bestFor: '国内开发者，特别是字节生态用户',
    pricing: '目前免费 (公测中)',
    url: 'https://www.trae.ai',
    rating: 4.6
  },
  {
    id: 'comate',
    name: 'Baidu Comate',
    logo: 'https://picsum.photos/seed/comate/200/200',
    description: '百度推出的智能代码助手，基于文心大模型，深度理解中文语境。',
    features: ['中文注释生成', '单元测试生成', '代码规范检查', '私有化部署支持'],
    bestFor: '对中文语境和国内合规有要求的企业',
    pricing: '免费版 / 企业版',
    url: 'https://comate.baidu.com',
    rating: 4.4
  },
  {
    id: 'lingma',
    name: '通义灵码 (Lingma)',
    logo: 'https://picsum.photos/seed/lingma/200/200',
    description: '阿里云推出的 AI 编程助手，在中文指令理解和阿里云生态集成上表现优异。',
    features: ['阿里云服务集成', '高性能补全', '技术文档问答', '一键生成注释'],
    bestFor: '阿里云用户及寻求稳定国产替代的开发者',
    pricing: '免费',
    url: 'https://tongyi.aliyun.com/lingma',
    rating: 4.5
  }
];
