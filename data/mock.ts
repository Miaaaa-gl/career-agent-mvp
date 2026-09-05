export type SkillKey = 'market'|'user'|'data'|'product'|'gtm'|'content'|'project'|'collab';
export type Entry = {id:string;date:string;title:string;type:string;summary:string;reflection:string;skills:SkillKey[];evidenceIds:string[];signal:string;important?:boolean};
export type Evidence = {id:string;date:string;description:string;skill:SkillKey;entryId:string;strength:number};

export const skills = [
  {id:'market',name:'市场洞察',current:3,target:{GTM:4,PMM:4,'International Growth':4,'AI Product Ops':3},missing:['完整竞品分析','市场进入判断']},
  {id:'user',name:'用户洞察',current:3,target:{GTM:4,PMM:4,'International Growth':4,'AI Product Ops':4},missing:['深度用户访谈','用户分群模型']},
  {id:'data',name:'数据分析',current:3,target:{GTM:3,PMM:3,'International Growth':4,'AI Product Ops':4},missing:['指标体系设计']},
  {id:'product',name:'产品理解',current:2,target:{GTM:4,PMM:5,'International Growth':3,'AI Product Ops':5},missing:['产品发布全流程','需求优先级判断']},
  {id:'gtm',name:'GTM / 商业策略',current:1,target:{GTM:5,PMM:4,'International Growth':4,'AI Product Ops':3},missing:['Positioning','Launch Planning','Channel Strategy']},
  {id:'content',name:'内容与传播',current:3,target:{GTM:4,PMM:5,'International Growth':4,'AI Product Ops':3},missing:['Messaging Framework']},
  {id:'project',name:'项目推进',current:3,target:{GTM:4,PMM:4,'International Growth':4,'AI Product Ops':4},missing:['端到端项目 Owner 经历']},
  {id:'collab',name:'跨团队协作',current:2,target:{GTM:4,PMM:4,'International Growth':4,'AI Product Ops':5},missing:['研发/产品协同']},
] as const;

export const entries: Entry[] = [
 {id:'e1',date:'2026-09-04',title:'Creator Incentive Campaign',type:'工作',summary:'完成创作者视频统计，并开始追问活动筛选逻辑与效果指标。',reflection:'我对重复统计兴趣较低，更想理解策略选择与商业机制。',skills:['data','gtm','project'],evidenceIds:['v1','v2'],signal:'Strategy ↑ · Execution ↓',important:true},
 {id:'e2',date:'2026-08-28',title:'海外访客搜索行为分析',type:'项目',summary:'分析 687 名海外访客的搜索与 RFQ 行为，提炼内容机会。',reflection:'从行为数据连接真实需求，是我愿意深入的工作。',skills:['user','data','market'],evidenceIds:['v3','v4'],signal:'User Insight ↑',important:true},
 {id:'e3',date:'2026-08-16',title:'Mentor 关于岗位选择的反馈',type:'反馈',summary:'导师建议补足完整 launch 经验，再判断 GTM 与 PMM 的优先级。',reflection:'目标岗位不能只看兴趣，需要用可验证的项目经历来判断。',skills:['product','gtm'],evidenceIds:['v5'],signal:'Career hypothesis challenged',important:true},
 {id:'e4',date:'2026-07-22',title:'竞品内容研究',type:'学习',summary:'拆解三家同类产品的定位、内容结构与目标用户。',reflection:'我能够发现差异，但还缺少把结论转成策略的经验。',skills:['market','content'],evidenceIds:['v6'],signal:'Market Insight ↑'},
 {id:'e5',date:'2026-06-10',title:'Campaign 复盘会议',type:'会议',summary:'首次旁听活动复盘，记录流量、转化与成本的指标关系。',reflection:'结果指标背后的因果判断比执行本身更吸引我。',skills:['data','gtm','collab'],evidenceIds:['v7'],signal:'GTM interest ↑'},
];

export const evidence: Evidence[] = [
 {id:'v1',date:'2026-09-04',description:'独立核对 42 位创作者内容与付款数据',skill:'data',entryId:'e1',strength:2},
 {id:'v2',date:'2026-09-04',description:'提出用参与率与转化率补充活动效果复盘',skill:'gtm',entryId:'e1',strength:2},
 {id:'v3',date:'2026-08-28',description:'分析 687 名海外访客搜索行为',skill:'user',entryId:'e2',strength:3},
 {id:'v4',date:'2026-08-28',description:'结合 RFQ 提炼需求和内容机会',skill:'market',entryId:'e2',strength:3},
 {id:'v5',date:'2026-08-16',description:'明确 Product Launch 是目标岗位关键缺口',skill:'product',entryId:'e3',strength:1},
 {id:'v6',date:'2026-07-22',description:'完成三家竞品定位与内容结构拆解',skill:'market',entryId:'e4',strength:2},
 {id:'v7',date:'2026-06-10',description:'建立活动流量、转化与成本指标笔记',skill:'data',entryId:'e5',strength:1},
];

export const jobs = [
 {company:'DJI',role:'Product Marketing Intern',stage:'二面',date:'08/30',result:'进行中',gap:'Product Launch'},
 {company:'ByteDance',role:'International Growth Intern',stage:'简历筛选',date:'09/02',result:'进行中',gap:'Market Entry'},
 {company:'Canva',role:'GTM Strategy Intern',stage:'已投递',date:'09/03',result:'等待',gap:'GTM Strategy'},
];
export const actions = ['争取参与一次 Campaign Brief','主动完成 Creator Performance Analysis','旁听产品上线或市场策略会议'];
