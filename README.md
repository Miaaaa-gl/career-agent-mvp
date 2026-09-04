# Career Agent MVP

一个基于 Next.js 的响应式个人 Career OS 骨架。V0.1 使用本地 mock 数据，核心链路为：

`Career Entry → Evidence → Skill → Role Gap → Recommended Action`

## 运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 已实现

- Home：Quick Capture、目标岗位、Top Gaps、本周行动、最近记录
- Career Journal：Calendar、Timeline、Year Heatmap、记录详情
- Skill Map：Radar Chart、Target Role Selector、Gap Detail、证据反向跳转
- Career Memory：Evidence / Skill / Experience 关联浏览
- Job Tracker：独立求职管线和面试识别的 Skill Gap
- 响应式移动端：记录优先、折叠菜单、快速入口
- 浏览器本地持久化：新增记录、目标岗位、行动勾选和 Job Tracker 刷新后保留

## 数据与后续接口

- `data/mock.ts`：当前本地数据源与类型
- `lib/career.ts`：Gap 计算、跨实体查询和 `CareerRepository` 接口
- `CareerRepository` 是 Supabase adapter 的替换位置
- Quick Capture 当前生成本地草稿；后续可在保存动作接入 AI structured output，将结果写入 Entry、Evidence 与 Skill
- 当前持久化使用 `localStorage`，适合单设备自用；跨设备同步与云端备份仍需接入 Supabase

## Vercel

项目无需额外构建配置，Vercel 会自动识别 Next.js。部署后浏览器本地数据不会因重新部署而丢失，但清理浏览器数据、换浏览器或换设备不会自动同步。

## 验证

```bash
npm run build
```
