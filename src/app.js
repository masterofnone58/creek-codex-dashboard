const state = {
  group: null,
  selectedCompanyId: null,
  selectedTab: "overview",
  cache: {},
  language: getInitialLanguage()
};

const tabs = [
  { id: "overview" },
  { id: "sales" },
  { id: "transactions" },
  { id: "operations" },
  { id: "procurement" },
  { id: "inventory" },
  { id: "trade" },
  { id: "finance" },
  { id: "tax" },
  { id: "compliance" },
  { id: "company" },
  { id: "activity" }
];

const UI_STRINGS = {
  en: {
    brandEyebrow: "Operations Platform",
    brandTitle: "Creek Group Console",
    languageLabel: "Language",
    searchLabel: "Find company",
    searchPlaceholder: "Search by name, region, tag",
    companyListTitle: "Companies",
    groupViewEyebrow: "Group View",
    groupAccessNote: "Access: All users can view all companies (V1)",
    panelRevenueTrend: "Revenue Trend (12M)",
    panelTransactionTrend: "Transactions Trend (12M)",
    panelStockDistribution: "Inventory by Company",
    panelLeadFunnel: "Sales Lead Funnel",
    panelPriorityTasks: "Priority Tasks",
    panelAlertFeed: "Alerts Feed",
    panelRecentTransactions: "Recent Transactions",
    panelActiveLeads: "Active Sales Leads"
  },
  "zh-CN": {
    brandEyebrow: "运营平台",
    brandTitle: "Creek 集团控制台",
    languageLabel: "语言",
    searchLabel: "查找公司",
    searchPlaceholder: "按名称、区域、标签搜索",
    companyListTitle: "公司列表",
    groupViewEyebrow: "集团视图",
    groupAccessNote: "访问权限：所有用户均可查看所有公司（V1）",
    panelRevenueTrend: "收入趋势（12个月）",
    panelTransactionTrend: "交易趋势（12个月）",
    panelStockDistribution: "按公司库存",
    panelLeadFunnel: "销售线索漏斗",
    panelPriorityTasks: "优先任务",
    panelAlertFeed: "告警动态",
    panelRecentTransactions: "最新交易",
    panelActiveLeads: "活跃销售线索"
  }
};

const TAB_LABELS = {
  en: {
    overview: "Overview",
    sales: "Sales",
    transactions: "Transactions",
    operations: "Operations",
    procurement: "Procurement",
    inventory: "Inventory",
    trade: "Trade",
    finance: "Finance",
    tax: "Tax",
    compliance: "Compliance",
    company: "Company Mgmt",
    activity: "Activity"
  },
  "zh-CN": {
    overview: "概览",
    sales: "销售",
    transactions: "交易",
    operations: "运营",
    procurement: "采购",
    inventory: "库存",
    trade: "贸易",
    finance: "财务",
    tax: "税务",
    compliance: "合规",
    company: "公司管理",
    activity: "动态"
  }
};

const ZH_TEXT_MAP = {
  "As of": "截至",
  "days": "天",
  "Revenue YTD": "年初至今收入",
  "Sales YTD": "年初至今销售额",
  "Transactions": "交易笔数",
  "US-West": "美国西部",
  "US-East": "美国东部",
  "US-Central": "美国中部",
  "Industrial Components Manufacturing": "工业零部件制造",
  "Global Trade & Distribution": "全球贸易与分销",
  "Metal Fabrication & Assembly": "金属加工与装配",
  "Manufacturing": "制造",
  "Export": "出口",
  "Distribution": "分销",
  "Domestic": "本地业务",
  "Inventory Value": "库存价值",
  "Avg Stock Cover": "平均库存覆盖",
  "Gross Margin": "毛利率",
  "Tax Payable": "应纳税额",
  "Cash On Hand": "现金余额",
  "Open Leads": "开放线索",
  "Pipeline Value": "销售管道金额",
  "Return Rate": "退货率",
  "On-Time Delivery": "准时交付率",
  "Sales": "销售",
  "Tx": "交易",
  "Stock": "库存",
  "Leads": "线索",
  "Owner:": "负责人：",
  "Due": "到期",
  "Ref": "参考号",
  "Next step:": "下一步：",
  "Overview": "概览",
  "Sales KPIs": "销售关键指标",
  "Transaction KPIs": "交易关键指标",
  "Operations": "运营",
  "Procurement": "采购",
  "Inventory": "库存",
  "Trade": "贸易",
  "Finance": "财务",
  "Tax": "税务",
  "Compliance": "合规",
  "Company Mgmt": "公司管理",
  "Activity": "动态",
  "Executive KPI Snapshot": "高层关键指标快照",
  "Monthly Sales": "月度销售",
  "Monthly Transactions": "月度交易",
  "Operational Health": "运营健康度",
  "Top Alerts": "重点告警",
  "Top Tasks": "重点任务",
  "Orders YTD": "年初至今订单",
  "Avg Order Value": "平均订单金额",
  "Win Rate": "赢单率",
  "Pipeline": "销售管道",
  "Aging >30d": "超30天未推进",
  "Pipeline Stages": "管道阶段",
  "Regional Sales": "区域销售",
  "Top Customers": "重点客户",
  "Lead Tracker": "线索跟踪",
  "Sales Workbench": "销售工作台",
  "Total YTD": "年初至今总计",
  "Success Rate": "成功率",
  "Failed": "失败",
  "Refunds": "退款",
  "Chargebacks": "拒付",
  "Avg Cycle": "平均周期",
  "Channel Mix": "渠道构成",
  "Daily Transaction Volume": "每日交易量",
  "Exception Queue": "异常队列",
  "Transaction Controls": "交易控制",
  "Plant Utilization": "工厂利用率",
  "Work Orders": "工单",
  "Open": "打开",
  "Released": "已下发",
  "Delayed": "延迟",
  "Critical": "严重",
  "Completed Week": "本周完成",
  "Scrap Rate": "报废率",
  "Production Lines": "产线",
  "Plant Status": "工厂状态",
  "Maintenance": "维护",
  "Operations Workbench": "运营工作台",
  "Procurement KPIs": "采购关键指标",
  "Open POs": "未结采购单",
  "Late POs": "延迟采购单",
  "Spend YTD": "年初至今支出",
  "3-way Exceptions": "三方匹配异常",
  "Contracts 90d": "90天内到期合同",
  "Supplier OTIF": "供应商准时足量率",
  "PO Status": "采购单状态",
  "Category Spend": "品类支出",
  "Top Vendors": "核心供应商",
  "Supplier Risks": "供应商风险",
  "Procurement Workbench": "采购工作台",
  "Inventory KPIs": "库存关键指标",
  "Turns": "周转",
  "Stock Cover": "库存覆盖",
  "Stockouts": "缺货次数",
  "Excess SKU": "过剩SKU",
  "Obsolete": "呆滞",
  "Warehouse Value": "仓库价值",
  "Inventory Aging": "库存库龄",
  "Critical Items": "关键物料",
  "Movement Queue": "库存流转队列",
  "Inventory Workbench": "库存工作台",
  "Trade KPIs": "贸易关键指标",
  "Export Orders": "出口订单",
  "Import Shipments": "进口批次",
  "Customs Holds": "海关扣留",
  "Compliance Alerts": "合规告警",
  "Freight Cost": "运费成本",
  "Avg Transit": "平均运输时长",
  "Lane Volume": "航线量",
  "Incoterm Mix": "贸易术语构成",
  "Customs Queue": "海关队列",
  "Broker Performance": "报关行表现",
  "Trade Workbench": "贸易工作台",
  "Finance KPIs": "财务关键指标",
  "AR Overdue": "逾期应收",
  "AP Overdue": "逾期应付",
  "EBITDA": "息税折旧摊销前利润",
  "Cash": "现金",
  "Budget Variance": "预算偏差",
  "Forecast Accuracy": "预测准确率",
  "Close Status": "关账状态",
  "Month-end close:": "月结状态：",
  "Intercompany mismatches:": "公司间对账差异：",
  "Journal backlog:": "凭证积压：",
  "DSO / DPO:": "DSO / DPO：",
  "P&L Snapshot": "损益快照",
  "Cash Flow": "现金流",
  "Finance Queue": "财务队列",
  "Finance Workbench": "财务工作台",
  "Tax KPIs": "税务关键指标",
  "Tax Payable YTD": "年初至今应纳税额",
  "Corporate Tax": "企业所得税",
  "Indirect Tax": "间接税",
  "Filed On-time": "按时申报率",
  "Audit Flags": "审计标记",
  "Disputes": "争议事项",
  "Tax by Type": "按税种",
  "Filings Due": "即将到期申报",
  "Tax Risks": "税务风险",
  "Audit Trail": "审计轨迹",
  "Tax Workbench": "税务工作台",
  "Compliance KPIs": "合规关键指标",
  "Control Score": "控制评分",
  "Audit Findings": "审计发现",
  "Licenses 90d": "90天内到期许可",
  "Training": "培训完成率",
  "Open CAPA": "未关闭CAPA",
  "Policy Exceptions": "政策例外",
  "Findings by Area": "按领域审计问题",
  "Audit Calendar": "审计日历",
  "CAPA Queue": "CAPA队列",
  "License Registry": "证照台账",
  "Compliance Workbench": "合规工作台",
  "Entity Profile (View Only)": "主体资料（仅查看）",
  "Legal Entity:": "法人主体：",
  "Registration No:": "注册号：",
  "Entity Type:": "主体类型：",
  "HQ:": "总部：",
  "Fiscal Year:": "财年：",
  "Reporting Currency:": "报表币种：",
  "Sites": "站点",
  "Master Data Coverage": "主数据覆盖",
  "Items": "物料",
  "Vendors": "供应商",
  "Customers": "客户",
  "BOMs": "BOM",
  "Price Lists": "价格表",
  "Warehouses": "仓库",
  "Bank Accounts": "银行账户",
  "Insurance": "保险",
  "System Landscape": "系统架构",
  "Task Board": "任务看板",
  "Alert Feed": "告警动态",
  "Activity Timeline": "活动时间线",
  "Pending Approvals": "待审批",
  "Escalations": "升级事项",
  "Activity Notes": "说明",
  "Recent Transactions": "最新交易",
  "Customer": "客户",
  "Revenue": "收入",
  "Growth": "增长",
  "Account": "账户",
  "Value": "金额",
  "Stage": "阶段",
  "Next": "下一步",
  "Time": "时间",
  "Type": "类型",
  "Amount": "金额",
  "Status": "状态",
  "Issue": "问题",
  "Count": "数量",
  "Line": "科目",
  "Output": "产量",
  "Downtime(h)": "停机(小时)",
  "Plant": "工厂",
  "Util": "利用率",
  "Downtime": "停机",
  "Safety": "安全",
  "Overdue": "逾期",
  "Vendor": "供应商",
  "Category": "类别",
  "Spend": "支出",
  "Rating": "评分",
  "Risk": "风险",
  "Action": "措施",
  "SKU": "SKU",
  "Description": "描述",
  "Days Cover": "覆盖天数",
  "Shipment": "货运",
  "Age(d)": "账龄(天)",
  "Broker": "报关行",
  "On-time": "准时率",
  "Line": "科目",
  "Actual": "实际",
  "Budget": "预算",
  "Variance": "偏差",
  "Task": "任务",
  "Filing": "申报",
  "Due Date": "到期日",
  "Impact": "影响",
  "Item": "项目",
  "Date": "日期",
  "State": "状态",
  "Site": "站点",
  "Headcount": "人数",
  "Manager": "负责人",
  "Bank": "银行",
  "Account": "账号",
  "Currency": "币种",
  "Use": "用途",
  "Policy": "保单",
  "Provider": "承保方",
  "Expiry": "到期",
  "System": "系统",
  "Purpose": "用途",
  "Event": "事件",
  "Module": "模块",
  "Request": "请求",
  "Escalated To": "升级到",
  "On Track": "正常",
  "At Risk": "风险",
  "Pending": "待处理",
  "In Progress": "进行中",
  "Posted": "已过账",
  "Approved": "已批准",
  "Confirmed": "已确认",
  "Prepared": "已准备",
  "In Review": "审核中",
  "Valid": "有效",
  "Scheduled": "已排期",
  "Planned": "已计划",
  "Renewal Started": "已启动续期",
  "Renewal Needed": "需续期",
  "Filed": "已申报",
  "Closed": "已关闭",
  "Info": "信息",
  "Warning": "警告",
  "Critical": "严重",
  "High": "高",
  "Medium": "中",
  "Low": "低",
  "Operations": "运营",
  "Procurement": "采购",
  "Inventory": "库存",
  "Trade": "贸易",
  "Finance": "财务",
  "Compliance": "合规",
  "Sales": "销售",
  "Tax": "税务",
  "Transactions": "交易",
  "Mar": "3月",
  "Apr": "4月",
  "May": "5月",
  "Jun": "6月",
  "Jul": "7月",
  "Aug": "8月",
  "Sep": "9月",
  "Oct": "10月",
  "Nov": "11月",
  "Dec": "12月",
  "Jan": "1月",
  "Feb": "2月",
  "Mon": "周一",
  "Tue": "周二",
  "Wed": "周三",
  "Thu": "周四",
  "Fri": "周五",
  "Sat": "周六",
  "Sun": "周日",
  "New": "新建",
  "Qualified": "已资格评估",
  "Quoted": "已报价",
  "Negotiation": "谈判中",
  "Verbal": "口头确认",
  "All data is static mock JSON in V1.": "V1 所有数据均为静态模拟 JSON。",
  "Workflow approvals and editing can be enabled in V2.": "审批流与编辑功能可在 V2 启用。",
  "Backend updater can later refresh these JSON files from source systems.": "后续可由后端更新器从源系统刷新这些 JSON 文件。",
  "This tab acts as a day-to-day operations cockpit for each company.": "该页签作为各公司日常运营驾驶舱。"
};

const ZH_REPLACEMENTS = Object.entries(ZH_TEXT_MAP).sort((a, b) => b[0].length - a[0].length);

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem("dashboard_lang");
    if (saved === "en" || saved === "zh-CN") {
      return saved;
    }
  } catch (_error) {
    // Ignore storage issues and fall back to browser language.
  }
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

function getLocale() {
  return state.language === "zh-CN" ? "zh-CN" : "en-US";
}

function tabLabel(tabId) {
  return TAB_LABELS[state.language][tabId] || tabId;
}

function uiText(key) {
  return UI_STRINGS[state.language][key] || key;
}

function localizeText(text) {
  if (state.language !== "zh-CN") {
    return text;
  }
  return ZH_TEXT_MAP[text] || text;
}

function localizeHtml(html) {
  if (state.language !== "zh-CN") {
    return html;
  }
  let output = html;
  ZH_REPLACEMENTS.forEach(([source, target]) => {
    output = output.split(source).join(target);
  });
  return output;
}

function renderStaticText() {
  const keyMap = {
    brandEyebrow: "brand-eyebrow",
    brandTitle: "brand-title",
    languageLabel: "language-label",
    searchLabel: "search-label",
    companyListTitle: "company-list-title",
    groupViewEyebrow: "group-view-eyebrow",
    groupAccessNote: "group-access-note",
    panelRevenueTrend: "panel-revenue-trend",
    panelTransactionTrend: "panel-transaction-trend",
    panelStockDistribution: "panel-stock-distribution",
    panelLeadFunnel: "panel-lead-funnel",
    panelPriorityTasks: "panel-priority-tasks",
    panelAlertFeed: "panel-alert-feed",
    panelRecentTransactions: "panel-recent-transactions",
    panelActiveLeads: "panel-active-leads"
  };

  Object.entries(keyMap).forEach(([textKey, elementId]) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = uiText(textKey);
    }
  });

  if (els.companySearch) {
    els.companySearch.placeholder = uiText("searchPlaceholder");
  }
}

function formatMoney(value) {
  return new Intl.NumberFormat(getLocale(), {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatMoneyCompact(value) {
  return new Intl.NumberFormat(getLocale(), {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat(getLocale()).format(value);
}

function formatPct(value) {
  return `${Number(value).toFixed(1)}%`;
}

function formatDays(value) {
  return state.language === "zh-CN" ? `${value}天` : `${value} days`;
}

const els = {
  languageSelect: document.getElementById("language-select"),
  asOf: document.getElementById("as-of"),
  groupName: document.getElementById("group-name"),
  groupTags: document.getElementById("group-tags"),
  groupKpis: document.getElementById("group-kpis"),
  groupRevenueTrend: document.getElementById("group-revenue-trend"),
  groupTransactionTrend: document.getElementById("group-transaction-trend"),
  groupStockDistribution: document.getElementById("group-stock-distribution"),
  groupLeadFunnel: document.getElementById("group-lead-funnel"),
  groupTaskFeed: document.getElementById("group-task-feed"),
  groupAlertFeed: document.getElementById("group-alert-feed"),
  groupTransactionFeed: document.getElementById("group-transaction-feed"),
  groupLeadFeed: document.getElementById("group-lead-feed"),
  companyList: document.getElementById("company-list"),
  companySearch: document.getElementById("company-search"),
  detailTitle: document.getElementById("detail-title"),
  tabs: document.getElementById("tabs"),
  detailContent: document.getElementById("detail-content"),
  companySection: document.getElementById("company-section")
};

function statusClassByScore(value, thresholds = { ok: 90, warn: 80 }) {
  if (value >= thresholds.ok) {
    return "status-ok";
  }
  if (value >= thresholds.warn) {
    return "status-warn";
  }
  return "status-risk";
}

function severityClass(value) {
  const key = String(value || "info").toLowerCase();
  if (key === "critical") {
    return "severity-critical";
  }
  if (key === "warning") {
    return "severity-warning";
  }
  return "severity-info";
}

function priorityClass(value) {
  const key = String(value || "low").toLowerCase();
  if (key === "high") {
    return "priority-high";
  }
  if (key === "medium") {
    return "priority-medium";
  }
  return "priority-low";
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
}

function resolveCompanyName(companyId) {
  const company = state.group.companies.find((c) => c.id === companyId);
  return company ? company.name : companyId;
}

function renderMetricGrid(items) {
  return `
    <div class="metric-grid">
      ${items
        .map(
          (item) => `
            <div class="metric-box">
              <p class="metric-box-label">${localizeText(item.label)}</p>
              <p class="metric-box-value ${item.cls || ""}">${item.value}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderBarList(items, { labelKey, valueKey, formatValue = (v) => v }) {
  const max = Math.max(...items.map((item) => Number(item[valueKey]) || 0), 1);
  return `
    <div class="bar-list">
      ${items
        .map((item) => {
          const width = Math.max(6, Math.round((Number(item[valueKey]) / max) * 100));
          const label = localizeText(String(item[labelKey]));
          return `
            <div class="bar-row">
              <span class="bar-label">${label}</span>
              <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
              <span class="bar-value">${formatValue(item[valueKey])}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderSimpleTable(headers, rows) {
  return `
    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr>${headers.map((header) => `<th>${localizeText(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `<tr>${row.map((cell) => {
                if (typeof cell === "string") {
                  return `<td>${localizeText(cell)}</td>`;
                }
                return `<td>${cell}</td>`;
              }).join("")}</tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCard(title, body) {
  return `<article class="card"><h4>${localizeText(title)}</h4>${localizeHtml(body)}</article>`;
}

function renderSectionGrid(cards) {
  return `<section class="section-grid">${cards.join("")}</section>`;
}

function renderTaskFeed(tasks) {
  return `
    <ul class="feed-list">
      ${tasks
        .map(
          (task) => `
            <li class="feed-item">
              <p class="feed-title">${localizeText(task.title)}<span class="priority ${priorityClass(task.priority)}">${localizeText(task.priority)}</span></p>
              <p class="feed-meta">${resolveCompanyName(task.companyId)} • ${localizeText(task.module)} • ${localizeText("Owner:")} ${task.owner}</p>
              <p class="feed-meta">${localizeText("Due")} ${task.dueDate} • ${localizeText(task.status)}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function scrollToCompanySection() {
  if (!els.companySection) {
    return;
  }
  els.companySection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAlertFeed(alerts) {
  return `
    <ul class="feed-list">
      ${alerts
        .map(
          (alert) => `
            <li class="feed-item">
              <p class="feed-title">${localizeText(alert.message)}<span class="severity ${severityClass(alert.severity)}">${localizeText(alert.severity)}</span></p>
              <p class="feed-meta">${resolveCompanyName(alert.companyId)} • ${localizeText(alert.module)}</p>
              <p class="feed-meta">${alert.time}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderTransactionFeed(transactions) {
  return `
    <ul class="feed-list">
      ${transactions
        .map(
          (tx) => `
            <li class="feed-item">
              <p class="feed-title">${localizeText(tx.type)}: ${formatMoney(tx.amount)}<span class="status status-open">${localizeText(tx.status)}</span></p>
              <p class="feed-meta">${resolveCompanyName(tx.companyId)} • ${localizeText(tx.channel)}</p>
              <p class="feed-meta">${localizeText("Ref")} ${tx.reference} • ${tx.time}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderLeadFeed(leads) {
  return `
    <ul class="feed-list">
      ${leads
        .map(
          (lead) => `
            <li class="feed-item">
              <p class="feed-title">${lead.account} - ${formatMoney(lead.value)}<span class="status status-open">${localizeText(lead.stage)}</span></p>
              <p class="feed-meta">${resolveCompanyName(lead.companyId)} • ${localizeText("Owner:")} ${lead.owner}</p>
              <p class="feed-meta">${localizeText("Next step:")} ${lead.nextStepDate}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderGroupDashboard() {
  els.groupName.textContent = state.group.groupName;
  els.asOf.textContent = `${localizeText("As of")} ${state.group.asOf}`;

  const kpi = state.group.groupKpis;
  const kpis = [
    { label: "Revenue YTD", value: formatMoneyCompact(kpi.revenueYTD) },
    { label: "Sales YTD", value: formatMoneyCompact(kpi.salesYTD) },
    { label: "Transactions", value: formatNumber(kpi.transactionsYTD) },
    { label: "Inventory Value", value: formatMoneyCompact(kpi.inventoryValue) },
    { label: "Avg Stock Cover", value: formatDays(kpi.avgStockCoverDays) },
    { label: "Gross Margin", value: formatPct(kpi.grossMarginPct) },
    { label: "Tax Payable", value: formatMoneyCompact(kpi.taxPayableYTD) },
    { label: "Cash On Hand", value: formatMoneyCompact(kpi.cashOnHand) },
    { label: "Open Leads", value: formatNumber(kpi.openLeads) },
    { label: "Pipeline Value", value: formatMoneyCompact(kpi.pipelineValue) },
    {
      label: "Return Rate",
      value: formatPct(kpi.customerReturnsPct),
      cls: kpi.customerReturnsPct <= 2 ? "status-ok" : "status-warn"
    },
    {
      label: "On-Time Delivery",
      value: formatPct(kpi.onTimeDeliveryPct),
      cls: statusClassByScore(kpi.onTimeDeliveryPct)
    }
  ];

  els.groupKpis.innerHTML = kpis
    .map(
      (entry) => `
        <article class="kpi-card">
          <h4>${localizeText(entry.label)}</h4>
          <div class="kpi-value ${entry.cls || ""}">${entry.value}</div>
        </article>
      `
    )
    .join("");

  const allTags = [...new Set(state.group.companies.flatMap((c) => c.tags))];
  els.groupTags.innerHTML = allTags.map((tag) => `<span class="chip">${localizeText(tag)}</span>`).join("");

  els.groupRevenueTrend.innerHTML = renderBarList(state.group.charts.monthlyRevenue, {
    labelKey: "period",
    valueKey: "value",
    formatValue: (value) => formatMoneyCompact(value)
  });

  els.groupTransactionTrend.innerHTML = renderBarList(state.group.charts.monthlyTransactions, {
    labelKey: "period",
    valueKey: "value",
    formatValue: (value) => formatNumber(value)
  });

  els.groupStockDistribution.innerHTML = renderBarList(state.group.charts.inventoryByCompany, {
    labelKey: "short",
    valueKey: "value",
    formatValue: (value) => formatMoneyCompact(value)
  });

  els.groupLeadFunnel.innerHTML = renderBarList(state.group.charts.salesLeadFunnel, {
    labelKey: "stage",
    valueKey: "count",
    formatValue: (value) => formatNumber(value)
  });

  els.groupTaskFeed.innerHTML = renderTaskFeed(state.group.tasks);
  els.groupAlertFeed.innerHTML = renderAlertFeed(state.group.alerts);
  els.groupTransactionFeed.innerHTML = renderTransactionFeed(state.group.transactions);
  els.groupLeadFeed.innerHTML = renderLeadFeed(state.group.salesLeads);
}

function renderCompanyList(search = "") {
  const filtered = state.group.companies.filter((company) => {
    const text = `${company.name} ${company.region} ${company.tags.join(" ")}`.toLowerCase();
    return text.includes(search);
  });

  els.companyList.innerHTML = filtered
    .map(
      (company) => `
        <li class="company-item ${company.id === state.selectedCompanyId ? "active" : ""}" data-company-id="${company.id}">
          <h4>${company.name}</h4>
          <p class="item-meta">${localizeText(company.region)} • ${localizeText(company.industry)}</p>
          <p class="item-meta">${localizeText("Sales")} ${formatMoneyCompact(company.salesYTD)} • ${localizeText("Tx")} ${formatNumber(company.transactionsYTD)}</p>
          <p class="item-meta">${localizeText("Stock")} ${company.stockLevelDays}d • ${localizeText("Leads")} ${company.leadsOpen}</p>
        </li>
      `
    )
    .join("");

  [...els.companyList.querySelectorAll(".company-item")].forEach((item) => {
    item.addEventListener("click", async () => {
      state.selectedCompanyId = item.dataset.companyId;
      state.selectedTab = "overview";
      renderCompanyList(els.companySearch.value.trim().toLowerCase());
      renderTabs();
      scrollToCompanySection();
      await renderSelectedCompany();
    });
  });
}

function renderTabs() {
  els.tabs.innerHTML = tabs
    .map(
      (tab) =>
        `<button class="tab-btn ${tab.id === state.selectedTab ? "active" : ""}" data-tab-id="${tab.id}">${tabLabel(tab.id)}</button>`
    )
    .join("");

  [...els.tabs.querySelectorAll(".tab-btn")].forEach((button) => {
    button.addEventListener("click", async () => {
      state.selectedTab = button.dataset.tabId;
      renderTabs();
      await renderSelectedCompany();
    });
  });
}

async function getCompanyDetails(companyId) {
  if (state.cache[companyId]) {
    return state.cache[companyId];
  }
  const details = await loadJson(`data/company-${companyId}.json`);
  state.cache[companyId] = details;
  return details;
}

function renderOverview(details) {
  const cards = [
    renderCard(
      "Executive KPI Snapshot",
      renderMetricGrid([
        { label: "Revenue YTD", value: formatMoneyCompact(details.overview.revenueYTD) },
        { label: "Sales YTD", value: formatMoneyCompact(details.overview.salesYTD) },
        { label: "Transactions", value: formatNumber(details.overview.transactionsYTD) },
        { label: "Stock Cover", value: formatDays(details.overview.stockLevelDays) },
        { label: "Open Leads", value: formatNumber(details.overview.openLeads) },
        { label: "Tax Payable", value: formatMoneyCompact(details.overview.taxPayableYTD) }
      ])
    ),
    renderCard(
      "Monthly Sales",
      renderBarList(details.charts.monthlySales, {
        labelKey: "period",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Monthly Transactions",
      renderBarList(details.charts.monthlyTransactions, {
        labelKey: "period",
        valueKey: "value",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Operational Health",
      `<p>Work Orders Open: <strong>${formatNumber(details.operations.workOrders.open)}</strong></p>
       <p>Delayed / Critical: <strong class="status-warn">${details.operations.workOrders.delayed}</strong> / <strong class="status-risk">${details.operations.workOrders.critical}</strong></p>
       <p>Plant Utilization Avg: <strong>${formatPct(details.operations.utilizationAvgPct)}</strong></p>
       <p>On-time Delivery: <strong>${formatPct(details.overview.customerOTD)}</strong></p>`
    ),
    renderCard("Top Alerts", renderAlertFeed(details.activity.alerts.slice(0, 4))),
    renderCard("Top Tasks", renderTaskFeed(details.activity.tasks.slice(0, 4)))
  ];
  return renderSectionGrid(cards);
}

function renderSales(details) {
  const cards = [
    renderCard(
      "Sales KPIs",
      renderMetricGrid([
        { label: "Orders YTD", value: formatNumber(details.sales.ordersYTD) },
        { label: "Avg Order Value", value: formatMoneyCompact(details.sales.avgOrderValue) },
        { label: "Win Rate", value: formatPct(details.sales.winRatePct) },
        { label: "Pipeline", value: formatMoneyCompact(details.sales.pipelineValue) },
        { label: "Open Leads", value: formatNumber(details.sales.openLeads) },
        { label: "Aging >30d", value: formatNumber(details.sales.leadsAgingOver30Days) }
      ])
    ),
    renderCard(
      "Pipeline Stages",
      renderBarList(details.sales.pipelineStages, {
        labelKey: "stage",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Regional Sales",
      renderBarList(details.sales.regionalSales, {
        labelKey: "region",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Top Customers",
      renderSimpleTable(
        ["Customer", "Revenue", "Growth"],
        details.sales.topCustomers.map((customer) => [
          customer.name,
          formatMoneyCompact(customer.revenue),
          `${customer.growthPct > 0 ? "+" : ""}${formatPct(customer.growthPct)}`
        ])
      )
    ),
    renderCard(
      "Lead Tracker",
      renderSimpleTable(
        ["Account", "Value", "Stage", "Owner", "Next"],
        details.sales.leads.map((lead) => [
          lead.account,
          formatMoneyCompact(lead.value),
          lead.stage,
          lead.owner,
          lead.nextStepDate
        ])
      )
    ),
    renderCard(
      "Sales Workbench",
      `<ul>
        <li>Review quote cycle-time outliers by customer segment.</li>
        <li>Push lead follow-ups older than 14 days.</li>
        <li>Close-loop with operations for constrained SKUs.</li>
        <li>Validate export order profitability by lane.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderTransactions(details) {
  const cards = [
    renderCard(
      "Transaction KPIs",
      renderMetricGrid([
        { label: "Total YTD", value: formatNumber(details.transactions.totalYTD) },
        { label: "Success Rate", value: formatPct(details.transactions.successRatePct) },
        { label: "Failed", value: formatNumber(details.transactions.failedCount), cls: "status-warn" },
        { label: "Refunds", value: formatNumber(details.transactions.refundsCount) },
        { label: "Chargebacks", value: formatNumber(details.transactions.chargebackCount), cls: "status-risk" },
        { label: "Avg Cycle", value: `${details.transactions.avgProcessingHours}h` }
      ])
    ),
    renderCard(
      "Channel Mix",
      renderBarList(details.transactions.channelMix, {
        labelKey: "channel",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Daily Transaction Volume",
      renderBarList(details.transactions.dailyVolume, {
        labelKey: "day",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Recent Transactions",
      renderSimpleTable(
        ["Time", "Ref", "Type", "Amount", "Status"],
        details.transactions.recent.map((tx) => [tx.time, tx.reference, tx.type, formatMoney(tx.amount), tx.status])
      )
    ),
    renderCard(
      "Exception Queue",
      renderSimpleTable(
        ["Issue", "Count", "Owner"],
        details.transactions.exceptions.map((item) => [item.issue, formatNumber(item.count), item.owner])
      )
    ),
    renderCard(
      "Transaction Controls",
      `<ul>
        <li>Reconcile failed settlements and retry schedule.</li>
        <li>Investigate high chargeback routes.</li>
        <li>Validate refund policy adherence by region.</li>
        <li>Audit tax coding on manual invoices.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderOperations(details) {
  const cards = [
    renderCard(
      "Plant Utilization",
      renderBarList(details.operations.plants.map((plant) => ({
        short: plant.short,
        value: plant.utilizationPct
      })), {
        labelKey: "short",
        valueKey: "value",
        formatValue: (value) => formatPct(value)
      })
    ),
    renderCard(
      "Work Orders",
      renderMetricGrid([
        { label: "Open", value: formatNumber(details.operations.workOrders.open) },
        { label: "Released", value: formatNumber(details.operations.workOrders.released) },
        { label: "Delayed", value: formatNumber(details.operations.workOrders.delayed), cls: "status-warn" },
        { label: "Critical", value: formatNumber(details.operations.workOrders.critical), cls: "status-risk" },
        { label: "Completed Week", value: formatNumber(details.operations.workOrders.completedThisWeek) },
        { label: "Scrap Rate", value: formatPct(details.operations.scrapRatePct) }
      ])
    ),
    renderCard(
      "Production Lines",
      renderSimpleTable(
        ["Line", "Output", "OEE", "Downtime(h)"],
        details.operations.productionLines.map((line) => [
          line.name,
          formatNumber(line.outputUnits),
          formatPct(line.oeePct),
          String(line.downtimeHours)
        ])
      )
    ),
    renderCard(
      "Plant Status",
      renderSimpleTable(
        ["Plant", "Util", "Downtime", "Safety"],
        details.operations.plants.map((plant) => [
          plant.name,
          formatPct(plant.utilizationPct),
          `${plant.downtimeHours}h`,
          String(plant.safetyIncidents)
        ])
      )
    ),
    renderCard(
      "Maintenance",
      renderSimpleTable(
        ["Type", "Open", "Overdue"],
        details.operations.maintenance.map((entry) => [entry.type, String(entry.open), String(entry.overdue)])
      )
    ),
    renderCard(
      "Operations Workbench",
      `<ul>
        <li>Prioritize bottleneck lines above 15% downtime.</li>
        <li>Escalate critical work orders older than 48h.</li>
        <li>Validate safety corrective actions before shift handoff.</li>
        <li>Track scrap spikes against material lots.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderProcurement(details) {
  const cards = [
    renderCard(
      "Procurement KPIs",
      renderMetricGrid([
        { label: "Open POs", value: formatNumber(details.procurement.openPOs) },
        { label: "Late POs", value: formatNumber(details.procurement.latePOs), cls: "status-warn" },
        { label: "Spend YTD", value: formatMoneyCompact(details.procurement.spendYTD) },
        { label: "3-way Exceptions", value: formatNumber(details.procurement.threeWayMatchExceptions) },
        { label: "Contracts 90d", value: formatNumber(details.procurement.contractsExpiring90Days) },
        { label: "Supplier OTIF", value: formatPct(details.procurement.supplierOTIFPct) }
      ])
    ),
    renderCard(
      "PO Status",
      renderBarList(details.procurement.poStatus, {
        labelKey: "status",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Category Spend",
      renderBarList(details.procurement.categorySpend, {
        labelKey: "category",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Top Vendors",
      renderSimpleTable(
        ["Vendor", "Category", "Spend", "Rating"],
        details.procurement.topVendors.map((vendor) => [
          vendor.name,
          vendor.category,
          formatMoneyCompact(vendor.spend),
          String(vendor.rating)
        ])
      )
    ),
    renderCard(
      "Supplier Risks",
      renderSimpleTable(
        ["Vendor", "Risk", "Action"],
        details.procurement.supplierRisks.map((risk) => [risk.vendor, risk.riskLevel, risk.action])
      )
    ),
    renderCard(
      "Procurement Workbench",
      `<ul>
        <li>Close aged POs pending goods receipt.</li>
        <li>Renegotiate high-variance freight contracts.</li>
        <li>Resolve 3-way match discrepancies before close.</li>
        <li>Review supplier scorecards with sourcing leads.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderInventory(details) {
  const cards = [
    renderCard(
      "Inventory KPIs",
      renderMetricGrid([
        { label: "Inventory Value", value: formatMoneyCompact(details.inventory.value) },
        { label: "Turns", value: String(details.inventory.turns) },
        { label: "Stock Cover", value: formatDays(details.inventory.stockLevelDays) },
        { label: "Stockouts", value: formatNumber(details.inventory.stockouts), cls: "status-warn" },
        { label: "Excess SKU", value: formatNumber(details.inventory.excessSKU) },
        { label: "Obsolete", value: formatNumber(details.inventory.obsoleteSKU), cls: "status-risk" }
      ])
    ),
    renderCard(
      "Warehouse Value",
      renderBarList(details.inventory.warehouseValue, {
        labelKey: "warehouse",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Inventory Aging",
      renderBarList(details.inventory.agingBuckets, {
        labelKey: "bucket",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Critical Items",
      renderSimpleTable(
        ["SKU", "Description", "Days Cover", "Status"],
        details.inventory.criticalItems.map((item) => [item.sku, item.description, String(item.daysCover), item.status])
      )
    ),
    renderCard(
      "Movement Queue",
      renderSimpleTable(
        ["Type", "Count", "Owner"],
        details.inventory.movementQueue.map((item) => [item.type, formatNumber(item.count), item.owner])
      )
    ),
    renderCard(
      "Inventory Workbench",
      `<ul>
        <li>Rebalance stock between high and low cover warehouses.</li>
        <li>Review obsolete inventory liquidation list.</li>
        <li>Update reorder points for volatile demand SKUs.</li>
        <li>Close cycle-count variances pending approval.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderTrade(details) {
  const cards = [
    renderCard(
      "Trade KPIs",
      renderMetricGrid([
        { label: "Export Orders", value: formatNumber(details.trade.exportOrders) },
        { label: "Import Shipments", value: formatNumber(details.trade.importShipments) },
        { label: "Customs Holds", value: formatNumber(details.trade.customsHolds), cls: "status-warn" },
        { label: "Compliance Alerts", value: formatNumber(details.trade.tradeComplianceAlerts), cls: "status-risk" },
        { label: "Freight Cost", value: formatMoneyCompact(details.trade.freightCostYTD) },
        { label: "Avg Transit", value: formatDays(details.trade.avgTransitDays) }
      ])
    ),
    renderCard(
      "Lane Volume",
      renderBarList(details.trade.laneVolume, {
        labelKey: "lane",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Incoterm Mix",
      renderBarList(details.trade.incotermMix, {
        labelKey: "term",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Customs Queue",
      renderSimpleTable(
        ["Shipment", "Issue", "Age(d)", "Owner"],
        details.trade.customsQueue.map((entry) => [
          entry.shipment,
          entry.issue,
          String(entry.ageDays),
          entry.owner
        ])
      )
    ),
    renderCard(
      "Broker Performance",
      renderSimpleTable(
        ["Broker", "On-time", "Disputes"],
        details.trade.brokerPerformance.map((broker) => [
          broker.name,
          formatPct(broker.onTimePct),
          String(broker.disputes)
        ])
      )
    ),
    renderCard(
      "Trade Workbench",
      `<ul>
        <li>Resolve customs holds exceeding 3 days.</li>
        <li>Audit HS code exceptions by item class.</li>
        <li>Review broker SLA misses with regional logistics.</li>
        <li>Reprice lanes with persistent cost overruns.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderFinance(details) {
  const closeClass =
    details.finance.monthCloseStatus === "On Track"
      ? "status-ok"
      : details.finance.monthCloseStatus === "At Risk"
        ? "status-warn"
        : "status-risk";

  const cards = [
    renderCard(
      "Finance KPIs",
      renderMetricGrid([
        { label: "AR Overdue", value: formatMoneyCompact(details.finance.arOverdue) },
        { label: "AP Overdue", value: formatMoneyCompact(details.finance.apOverdue) },
        { label: "EBITDA", value: formatPct(details.finance.ebitdaPct) },
        { label: "Cash", value: formatMoneyCompact(details.finance.cashOnHand) },
        { label: "Budget Variance", value: formatPct(details.finance.budgetVariancePct), cls: details.finance.budgetVariancePct < 0 ? "status-risk" : "status-ok" },
        { label: "Forecast Accuracy", value: formatPct(details.finance.forecastAccuracyPct) }
      ])
    ),
    renderCard(
      "Close Status",
      `<p>Month-end close: <strong class="${closeClass}">${details.finance.monthCloseStatus}</strong></p>
       <p>Intercompany mismatches: <strong>${details.finance.intercompanyMismatches}</strong></p>
       <p>Journal backlog: <strong>${details.finance.journalBacklog}</strong></p>
       <p>DSO / DPO: <strong>${details.finance.dsoDays}</strong> / <strong>${details.finance.dpoDays}</strong> ${localizeText("days")}</p>`
    ),
    renderCard(
      "P&L Snapshot",
      renderSimpleTable(
        ["Line", "Actual", "Budget", "Variance"],
        details.finance.pnl.map((line) => [
          line.line,
          formatMoneyCompact(line.actual),
          formatMoneyCompact(line.budget),
          `${line.variancePct > 0 ? "+" : ""}${formatPct(line.variancePct)}`
        ])
      )
    ),
    renderCard(
      "Cash Flow",
      renderBarList(details.finance.cashFlowByMonth, {
        labelKey: "period",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Finance Queue",
      renderSimpleTable(
        ["Task", "Count", "Owner"],
        details.finance.financeQueue.map((entry) => [entry.task, String(entry.count), entry.owner])
      )
    ),
    renderCard(
      "Finance Workbench",
      `<ul>
        <li>Clear intercompany mismatches before close D-2.</li>
        <li>Approve aged journal entries over 7 days.</li>
        <li>Review DSO trend for top 20 customers.</li>
        <li>Reconcile forecast with sales pipeline probability.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderTax(details) {
  const cards = [
    renderCard(
      "Tax KPIs",
      renderMetricGrid([
        { label: "Tax Payable YTD", value: formatMoneyCompact(details.tax.taxPayableYTD) },
        { label: "Corporate Tax", value: formatMoneyCompact(details.tax.corporateTaxAccrued) },
        { label: "Indirect Tax", value: formatMoneyCompact(details.tax.indirectTaxAccrued) },
        { label: "Filed On-time", value: formatPct(details.tax.filedOnTimePct) },
        { label: "Audit Flags", value: String(details.tax.auditFlags), cls: details.tax.auditFlags > 2 ? "status-risk" : "status-warn" },
        { label: "Disputes", value: String(details.tax.openDisputes) }
      ])
    ),
    renderCard(
      "Tax by Type",
      renderBarList(details.tax.taxByType, {
        labelKey: "type",
        valueKey: "value",
        formatValue: (value) => formatMoneyCompact(value)
      })
    ),
    renderCard(
      "Filings Due",
      renderSimpleTable(
        ["Filing", "Due Date", "Owner", "Status"],
        details.tax.filingsDue.map((filing) => [filing.name, filing.dueDate, filing.owner, filing.status])
      )
    ),
    renderCard(
      "Tax Risks",
      renderSimpleTable(
        ["Risk", "Impact", "Action"],
        details.tax.taxRisks.map((risk) => [risk.risk, risk.impact, risk.action])
      )
    ),
    renderCard(
      "Audit Trail",
      renderSimpleTable(
        ["Item", "Date", "State"],
        details.tax.auditTrail.map((entry) => [entry.item, entry.date, entry.state])
      )
    ),
    renderCard(
      "Tax Workbench",
      `<ul>
        <li>Prepare filings due within next 30 days.</li>
        <li>Reconcile indirect tax differences by jurisdiction.</li>
        <li>Close open disputes with updated documentation.</li>
        <li>Run tax code validation on exception invoices.</li>
      </ul>`
    )
  ];
  return renderSectionGrid(cards);
}

function renderCompliance(details) {
  const controlScore = Math.max(
    30,
    100 - details.compliance.auditFindingsOpen * 1.8 - details.compliance.licensesExpiringIn90Days * 2
  );

  const cards = [
    renderCard(
      "Compliance KPIs",
      renderMetricGrid([
        { label: "Control Score", value: `${Math.round(controlScore)}/100`, cls: statusClassByScore(controlScore) },
        { label: "Audit Findings", value: String(details.compliance.auditFindingsOpen), cls: "status-risk" },
        { label: "Licenses 90d", value: String(details.compliance.licensesExpiringIn90Days), cls: "status-warn" },
        { label: "Training", value: formatPct(details.compliance.trainingCompletionPct) },
        { label: "Open CAPA", value: String(details.compliance.openCAPA) },
        { label: "Policy Exceptions", value: String(details.compliance.policyExceptions) }
      ])
    ),
    renderCard(
      "Findings by Area",
      renderBarList(details.compliance.findingsByArea, {
        labelKey: "area",
        valueKey: "count",
        formatValue: (value) => formatNumber(value)
      })
    ),
    renderCard(
      "Audit Calendar",
      renderSimpleTable(
        ["Audit", "Date", "Owner", "Status"],
        details.compliance.auditCalendar.map((item) => [item.audit, item.date, item.owner, item.status])
      )
    ),
    renderCard(
      "CAPA Queue",
      renderSimpleTable(
        ["Item", "Owner", "Due", "State"],
        details.compliance.capaQueue.map((entry) => [entry.item, entry.owner, entry.dueDate, entry.state])
      )
    ),
    renderCard(
      "License Registry",
      renderSimpleTable(
        ["License", "Expiry", "Status"],
        details.compliance.licenseRegistry.map((entry) => [entry.license, entry.expiryDate, entry.status])
      )
    ),
    renderCard(
      "Compliance Workbench",
      `<ul>
        <li>Close overdue CAPA items and attach evidence.</li>
        <li>Renew permits expiring within 90 days.</li>
        <li>Drive completion for mandatory compliance training.</li>
        <li>Review policy exceptions with legal team.</li>
      </ul>`
    )
  ];

  return renderSectionGrid(cards);
}

function renderCompanyMgmt(details) {
  const cards = [
    renderCard(
      "Entity Profile (View Only)",
      `<p>Legal Entity: <strong>${details.companyManagement.legalEntity}</strong></p>
       <p>Registration No: <strong>${details.companyManagement.registrationNo}</strong></p>
       <p>Entity Type: <strong>${details.companyManagement.entityType}</strong></p>
       <p>HQ: <strong>${details.companyManagement.hq}</strong></p>
       <p>Fiscal Year: <strong>${details.companyManagement.fiscalYear}</strong></p>
       <p>Reporting Currency: <strong>${details.companyManagement.currency}</strong></p>`
    ),
    renderCard(
      "Sites",
      renderSimpleTable(
        ["Site", "Type", "Headcount", "Manager"],
        details.companyManagement.sites.map((site) => [
          site.name,
          site.type,
          String(site.headcount),
          site.manager
        ])
      )
    ),
    renderCard(
      "Master Data Coverage",
      renderMetricGrid([
        { label: "Items", value: formatNumber(details.masterData.items) },
        { label: "Vendors", value: formatNumber(details.masterData.vendors) },
        { label: "Customers", value: formatNumber(details.masterData.customers) },
        { label: "BOMs", value: formatNumber(details.masterData.boms) },
        { label: "Price Lists", value: formatNumber(details.masterData.priceLists) },
        { label: "Warehouses", value: formatNumber(details.masterData.warehouses) }
      ])
    ),
    renderCard(
      "Bank Accounts",
      renderSimpleTable(
        ["Bank", "Account", "Currency", "Use"],
        details.companyManagement.bankAccounts.map((account) => [
          account.bank,
          account.accountNo,
          account.currency,
          account.use
        ])
      )
    ),
    renderCard(
      "Insurance",
      renderSimpleTable(
        ["Policy", "Provider", "Expiry"],
        details.companyManagement.insurancePolicies.map((policy) => [
          policy.policy,
          policy.provider,
          policy.expiryDate
        ])
      )
    ),
    renderCard(
      "System Landscape",
      renderSimpleTable(
        ["System", "Purpose", "Owner"],
        details.companyManagement.systems.map((system) => [
          system.name,
          system.purpose,
          system.owner
        ])
      )
    )
  ];

  return renderSectionGrid(cards);
}

function renderActivity(details) {
  const cards = [
    renderCard("Task Board", renderTaskFeed(details.activity.tasks)),
    renderCard("Alert Feed", renderAlertFeed(details.activity.alerts)),
    renderCard("Activity Timeline", renderSimpleTable(
      ["Time", "Event", "Owner", "Module"],
      details.activity.timeline.map((entry) => [entry.time, entry.event, entry.owner, entry.module])
    )),
    renderCard("Pending Approvals", renderSimpleTable(
      ["Request", "Count", "Owner"],
      details.activity.pendingApprovals.map((entry) => [entry.request, String(entry.count), entry.owner])
    )),
    renderCard("Escalations", renderSimpleTable(
      ["Issue", "Age(d)", "Escalated To"],
      details.activity.escalations.map((entry) => [entry.issue, String(entry.ageDays), entry.owner])
    )),
    renderCard(
      "Activity Notes",
      `<ul>
        <li>All data is static mock JSON in V1.</li>
        <li>Workflow approvals and editing can be enabled in V2.</li>
        <li>Backend updater can later refresh these JSON files from source systems.</li>
        <li>This tab acts as a day-to-day operations cockpit for each company.</li>
      </ul>`
    )
  ];

  return renderSectionGrid(cards);
}

function renderTab(details) {
  switch (state.selectedTab) {
    case "overview":
      return renderOverview(details);
    case "sales":
      return renderSales(details);
    case "transactions":
      return renderTransactions(details);
    case "operations":
      return renderOperations(details);
    case "procurement":
      return renderProcurement(details);
    case "inventory":
      return renderInventory(details);
    case "trade":
      return renderTrade(details);
    case "finance":
      return renderFinance(details);
    case "tax":
      return renderTax(details);
    case "compliance":
      return renderCompliance(details);
    case "company":
      return renderCompanyMgmt(details);
    case "activity":
      return renderActivity(details);
    default:
      return "";
  }
}

async function renderSelectedCompany() {
  if (!state.selectedCompanyId) {
    return;
  }

  const company = state.group.companies.find((entry) => entry.id === state.selectedCompanyId);
  const details = await getCompanyDetails(state.selectedCompanyId);
  const tabText = tabLabel(state.selectedTab);

  els.detailTitle.textContent = `${company.name} - ${tabText}`;
  els.detailContent.innerHTML = localizeHtml(renderTab(details));
}

function attachListeners() {
  els.companySearch.addEventListener("input", () => {
    renderCompanyList(els.companySearch.value.trim().toLowerCase());
  });

  if (els.languageSelect) {
    els.languageSelect.value = state.language;
    els.languageSelect.addEventListener("change", async (event) => {
      const nextLanguage = event.target.value === "zh-CN" ? "zh-CN" : "en";
      state.language = nextLanguage;
      try {
        localStorage.setItem("dashboard_lang", nextLanguage);
      } catch (_error) {
        // Ignore storage issues in restricted environments.
      }
      renderStaticText();
      renderGroupDashboard();
      renderCompanyList(els.companySearch.value.trim().toLowerCase());
      renderTabs();
      await renderSelectedCompany();
    });
  }
}

async function bootstrap() {
  state.group = await loadJson("data/companies.json");
  state.selectedCompanyId = state.group.companies[0]?.id || null;

  renderStaticText();
  renderGroupDashboard();
  renderCompanyList();
  renderTabs();
  await renderSelectedCompany();
  attachListeners();
}

bootstrap().catch((error) => {
  const message = state.language === "zh-CN"
    ? `无法加载仪表盘数据。${error.message}`
    : `Unable to load dashboard data. ${error.message}`;
  els.detailContent.innerHTML = `<div class="empty-state"><p>${message}</p></div>`;
});
