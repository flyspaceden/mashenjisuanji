# 深圳麻省计算机系统有限公司（MCS）官网

一个面向科技企业的多页面 React 官网，强调“实时 AI + 农业/产业数据”场景。支持中英文切换、响应式布局，面向 GitHub Pages 部署。

## 页面结构
- 首页：品牌定位、核心技术、关键赛道、对比数据与生态合作概览
- 解决方案：AI 水产养殖、福利化养鸡、盐碱地海水稻、数据确权与资产化、文旅/大健康
- 技术研发：鲁棒 ML、Core Sets、多模态感知、云边协同与架构流程
- 生态合作：高校/科研/企业/金融合作网络与模式
- 团队：创始人、核心合伙人、全球专家委员会与荣誉
- 商业模式：AIaaS + 交易佣金 + 硬件 + 项目制
- 洞见：新闻动态、白皮书、活动
- 招聘：文化价值观、岗位与福利
- 联系：联系信息与合作表单（无后台，仅展示）
- 404：未找到页面

## 技术栈
- React + TypeScript + Vite
- Tailwind CSS
- React Router（HashRouter，适配 GitHub Pages）
- i18next（中英文切换，语言记忆）

## 本地开发
```bash
npm install
npm run dev
```

## 构建与预览
```bash
npm run build
npm run preview
```

## 资源与占位
- 站点 Logo：`public/logo.png`
- 占位图地址集中在：`src/data/images.ts`（后续可替换）

## 部署
- 适配 GitHub Pages（`vite.config.ts` 已设置 `base: './'`）
