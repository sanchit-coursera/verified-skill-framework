import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle, Briefcase, Globe, Code, Database, Brain, Sparkles, Shield, Info, Network, ChevronDown, Lock, RefreshCw, GitMerge } from 'lucide-react';

const VERIFIED_SKILLS = {
  data_prep: {
    id: 'data_prep',
    name: 'Prepare analysis-ready datasets for downstream usage',
    category: 'Data',
    core_expressions: [
      'Identify data quality issues',
      'Handle missing or null values',
      'Standardize data types and formats',
      'Remove duplicate records',
      'Utilize basic tooling (Excel/SQL)'
    ],
    roles: {
      analytics: {
        title: 'Data Analyst',
        expressions: [],
        execution_context: {
          tools: ['SQL', 'Excel'],
          purpose: 'Reporting & Dashboards',
          constraints: 'Accuracy & Interpretability'
        }
      },
      engineering: {
        title: 'Data Engineer',
        expressions: [
          'Join and consolidate data from multiple sources',
          'Create reproducible scripts/workflows (ETL)'
        ],
        execution_context: {
          tools: ['Python', 'Airflow', 'Spark'],
          purpose: 'Operational Pipelines',
          constraints: 'Latency & Reliability'
        }
      },
      ml_engineering: {
        title: 'ML Engineer',
        expressions: [
          'Design robust data partitioning schemes',
          'Validate representativeness (distribution checks)',
          'Generate synthetic datasets'
        ],
        execution_context: {
          tools: ['Python', 'Pandas', 'TensorFlow'],
          purpose: 'Model Training',
          constraints: 'Bias Handling & Scale'
        }
      }
    }
  },
  gen_ai: {
    id: 'gen_ai',
    name: 'Apply generative AI tools to produce effective work outputs',
    category: 'GenAI',
    core_expressions: [
      'Formulate effective prompts',
      'Iterate using feedback',
      'Evaluate outputs for quality and risk',
      'Apply responsible AI practices'
    ],
    roles: {
      marketing: {
        title: 'Marketing Specialist',
        expressions: [
          'Provide brand voice and audience context',
          'Check factuality and claims risk',
          'Avoid IP and plagiarism risk'
        ],
        execution_context: { context: 'Content Creation', industry_example: 'Retail' }
      },
      software: {
        title: 'Software Developer',
        expressions: [
          'Review generated code for correctness',
          'Check security and dependency risk',
          'Avoid secret leakage'
        ],
        execution_context: { context: 'Coding Assistant', industry_example: 'Tech' }
      },
      data: {
        title: 'Data Professional',
        expressions: [
          'Provide data context and constraints',
          'Detect hallucinations and gaps',
          'Protect sensitive data'
        ],
        execution_context: { context: 'Analysis Helper', industry_example: 'Healthcare' }
      }
    },
    industries: {
      healthcare: ['Use approved clinical language', 'Check safety and compliance risk', 'De-identify patient data'],
      retail: ['Use product and pricing context', 'Check promo and policy accuracy', 'Ensure brand consistency'],
      tech: ['Review generated code for correctness', 'Check security and dependency risk', 'Avoid secret leakage']
    }
  }
};

// —— Concept View ——
const ConceptView = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [viewMode, setViewMode] = useState('anatomy');

  return (
    <div className="space-y-8 opacity-0 animate-fade-in fill-mode-forwards">
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-full bg-stone border border-stone-light shadow-card">
          <button
            onClick={() => setViewMode('anatomy')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-200 ${
              viewMode === 'anatomy'
                ? 'bg-ink text-cream shadow-card'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Anatomy of a Skill
          </button>
          <button
            onClick={() => setViewMode('hierarchy')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-200 ${
              viewMode === 'hierarchy'
                ? 'bg-ink text-cream shadow-card'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Skill Hierarchy
          </button>
        </div>
      </div>

      {viewMode === 'anatomy' ? (
        <>
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-card border border-stone-light opacity-0 animate-slide-up fill-mode-forwards stagger-1">
            <h3 className="font-display text-xl font-semibold text-ink mb-1 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-brand" />
              Naming Formula
            </h3>
            <p className="text-ink-muted text-sm mb-5">Action + result + context</p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-base font-body font-medium text-ink bg-cream-dark p-5 rounded-xl border border-stone">
              <div className="flex flex-col items-center">
                <span className="bg-amber-soft text-amber-brand px-4 py-1.5 rounded-lg border border-amber-border font-medium">The Action</span>
                <span className="text-[10px] text-amber-brand uppercase font-bold mt-1.5 tracking-wider">Action Verb</span>
              </div>
              <span className="text-ink-soft text-xl">+</span>
              <div className="flex flex-col items-center">
                <span className="bg-teal-soft text-teal px-4 py-1.5 rounded-lg border border-teal/20 font-medium">The Result</span>
                <span className="text-[10px] text-teal uppercase font-bold mt-1.5 tracking-wider">Work Output</span>
              </div>
              <span className="text-ink-soft text-xl">+</span>
              <div className="flex flex-col items-center">
                <span className="bg-stone-light text-ink-muted px-4 py-1.5 rounded-lg border border-stone font-medium italic">The Context</span>
                <span className="text-[10px] text-ink-soft uppercase font-bold mt-1.5 tracking-wider">Context</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative flex justify-center items-center min-h-[320px] bg-cream-dark rounded-2xl border border-stone opacity-0 animate-slide-up fill-mode-forwards stagger-2">
              <div
                className={`absolute w-72 h-72 rounded-full border-2 flex items-start justify-center pt-6 transition-all duration-300 cursor-pointer ${
                  activeLayer === 'execution' ? 'bg-stone-light border-ink/20 scale-105 shadow-card-hover' : 'bg-surface border-stone text-ink-soft hover:border-ink/10'
                }`}
                onMouseEnter={() => setActiveLayer('execution')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex flex-col items-center mt-2">
                  <span className="font-display font-semibold text-xs uppercase tracking-wider text-ink">Where (Environment)</span>
                  <span className="text-[10px] italic text-ink-muted mt-0.5">Execution Context</span>
                </div>
              </div>
              <div
                className={`absolute w-52 h-52 rounded-full border-2 flex items-start justify-center pt-5 transition-all duration-300 cursor-pointer ${
                  activeLayer === 'career' ? 'bg-stone-light border-ink/20 scale-105 shadow-card-hover' : 'bg-surface border-stone text-ink-soft hover:border-ink/10'
                }`}
                onMouseEnter={() => setActiveLayer('career')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex flex-col items-center mt-2">
                  <span className="font-display font-semibold text-xs uppercase tracking-wider text-ink">Role Level</span>
                  <span className="text-[10px] italic text-ink-muted mt-0.5">Career Context</span>
                </div>
              </div>
              <div
                className={`absolute w-32 h-32 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  activeLayer === 'core' ? 'bg-amber-soft border-amber-brand scale-110 shadow-accent' : 'bg-amber-soft/50 border-amber-brand/40 text-amber-brand hover:border-amber-brand'
                }`}
                onMouseEnter={() => setActiveLayer('core')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="text-center px-2">
                  <Layers className="w-7 h-7 mx-auto mb-1 text-amber-brand" />
                  <span className="font-display font-semibold text-xs block">The Basics</span>
                  <span className="text-[9px] block italic text-amber-brand/90 mt-0.5 leading-tight">Core Skill Expressions</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 opacity-0 animate-slide-up fill-mode-forwards stagger-3">
              {[
                { key: 'core', label: '1. The Basics (Core Skill)', desc: 'The fundamental tasks that never change. You take these with you to any job.', term: 'Core Skill Expressions', color: 'amber' },
                { key: 'career', label: '2. Role Expectations (Career Context)', desc: 'Depends on your job title. Higher levels require more complex work.', term: 'Context-Expanding Skill Expressions', color: 'stone' },
                { key: 'execution', label: '3. Work Environment (Execution Context)', desc: 'Where you work (Industry) and how you work (Tools).', term: 'Execution Context', color: 'stone' }
              ].map(({ key, label, desc, term, color }) => (
                <div
                  key={key}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    activeLayer === key
                      ? color === 'amber'
                        ? 'border-amber-brand bg-amber-soft shadow-card'
                        : 'border-ink/20 bg-stone-light shadow-card'
                      : 'border-stone bg-surface hover:border-stone-light'
                  }`}
                >
                  <h4 className={`font-display font-semibold ${color === 'amber' ? 'text-amber-brand' : 'text-ink'}`}>{label}</h4>
                  <p className="text-sm text-ink-muted mt-1">{desc}</p>
                  <p className="text-xs text-ink-soft font-mono mt-2">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-card border border-stone-light max-w-2xl mx-auto opacity-0 animate-slide-up fill-mode-forwards">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-semibold text-ink">The 4-Level Hierarchy</h3>
            <p className="text-ink-muted mt-2">How Verified Skills fit into a Job Role.</p>
          </div>
          <div className="space-y-0">
            {[
              { level: 1, label: 'Occupation Group (Role)', value: 'Data Analyst', bg: 'bg-ink', text: 'text-cream', icon: Briefcase },
              { level: 2, label: 'Verified Skill', value: 'Prepare analysis-ready datasets', sub: 'A portable, transferable unit of work.', highlight: true, icon: CheckCircle },
              { level: 3, label: 'Job Task', value: 'Details TBD', sub: 'Placeholder — to be defined.', bg: 'bg-stone-light', text: 'text-ink-muted', icon: Briefcase },
              { level: 4, label: 'Expression', values: ['Handle missing values', 'Remove duplicate records'], bg: 'bg-cream-dark', text: 'text-ink', grid: true }
            ].map((item, i) => (
              <div key={item.level} className="relative">
                {item.grid ? (
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    {item.values.map((v, j) => (
                      <div key={j} className={`${item.bg} ${item.text} border border-stone p-4 rounded-xl text-center`}>
                        <div className="text-[10px] uppercase font-bold text-ink-muted tracking-wider mb-1">Level 4: Expression</div>
                        <div className="text-sm font-medium">{v}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className={`${item.bg} ${item.text} p-4 rounded-xl text-center relative ${item.highlight ? 'ring-2 ring-amber-brand ring-offset-2 ring-offset-cream' : ''}`}>
                      {item.highlight && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-brand text-cream text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">We are here</span>
                      )}
                      <div className="text-[10px] uppercase font-bold opacity-90 tracking-widest mb-1">{`Level ${item.level}: ${item.label}`}</div>
                      <div className="font-display font-semibold flex items-center justify-center gap-2">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.value}
                      </div>
                      {item.sub && <p className="text-xs opacity-90 mt-1 italic">{item.sub}</p>}
                    </div>
                    {i < 3 && <div className="h-4 w-px bg-stone mx-auto" />}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// —— Transfer Simulator ——
const TransferSimulator = () => {
  const [selectedSkill, setSelectedSkill] = useState('data_prep');
  const [roleA, setRoleA] = useState('analytics');
  const [roleB, setRoleB] = useState('ml_engineering');

  const skillData = VERIFIED_SKILLS[selectedSkill];
  const roleAData = skillData.roles[roleA];
  const roleBData = skillData.roles[roleB];

  return (
    <div className="space-y-8 opacity-0 animate-fade-in fill-mode-forwards">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="opacity-0 animate-slide-up fill-mode-forwards">
          <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Verified Skill</label>
          <select
            className="w-full px-4 py-3 rounded-xl border-2 border-stone bg-surface font-body text-ink focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
            value={selectedSkill}
            onChange={(e) => {
              setSelectedSkill(e.target.value);
              const newSkill = VERIFIED_SKILLS[e.target.value];
              const keys = Object.keys(newSkill.roles);
              setRoleA(keys[0]);
              setRoleB(keys[1]);
            }}
          >
            {Object.values(VERIFIED_SKILLS).map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="opacity-0 animate-slide-up fill-mode-forwards stagger-1">
          <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Source Role</label>
          <select
            className="w-full px-4 py-3 rounded-xl border-2 border-stone bg-surface font-body text-ink focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
            value={roleA}
            onChange={(e) => setRoleA(e.target.value)}
          >
            {Object.entries(skillData.roles).map(([k, v]) => (
              <option key={k} value={k}>{v.title}</option>
            ))}
          </select>
        </div>
        <div className="opacity-0 animate-slide-up fill-mode-forwards stagger-2">
          <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Target Role</label>
          <select
            className="w-full px-4 py-3 rounded-xl border-2 border-stone bg-surface font-body text-ink focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
            value={roleB}
            onChange={(e) => setRoleB(e.target.value)}
          >
            {Object.entries(skillData.roles).map(([k, v]) => (
              <option key={k} value={k}>{v.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-surface p-5 md:p-6 rounded-2xl border border-stone shadow-card">
        <h4 className="font-display font-semibold text-ink mb-4 flex items-center gap-2">
          <Network className="w-4 h-4 text-teal" />
          Hierarchy in Motion
        </h4>
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4 text-center md:text-left">
          {[
            { label: 'Level 1: Occupation (Variable)', value: `${roleAData.title} → ${roleBData.title}`, icon: RefreshCw, bg: 'bg-stone-light', color: 'text-ink' },
            { label: 'Level 2: Verified Skill (Stable)', value: skillData.name, icon: Lock, bg: 'bg-amber-soft', color: 'text-amber-brand' },
            { label: 'Level 3: Job Task (TBD)', value: 'Details TBD', icon: Briefcase, bg: 'bg-stone-light', color: 'text-ink-muted' },
            { label: 'Level 4: Expressions (Adapts)', value: `${skillData.core_expressions.length} Core + ${roleBData.expressions.length} New`, icon: GitMerge, bg: 'bg-teal-soft/50', color: 'text-teal' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
            <div key={i} className={`flex-1 min-w-0 ${item.bg} border border-stone rounded-xl p-4 flex items-center gap-3`}>
              <div className="shrink-0 p-2 bg-surface rounded-lg shadow-card">
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-bold text-ink-muted tracking-wider">{item.label}</div>
                <div className={`text-sm font-semibold mt-1 break-words ${item.color}`}>{item.value}</div>
              </div>
            </div>
          ); })}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <div className="bg-surface rounded-2xl border-2 border-stone overflow-hidden flex flex-col opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-card-hover">
          <div className="bg-stone-light px-5 py-4 border-b border-stone">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-ink-muted" />
              <h4 className="font-display font-semibold text-ink">{roleAData.title}</h4>
            </div>
            <p className="text-xs text-ink-muted mt-1">
              {roleAData.execution_context.tools ? roleAData.execution_context.tools.join(', ') : roleAData.execution_context.context}
            </p>
          </div>
          <div className="p-5 space-y-4 flex-grow">
            <div>
              <div className="text-xs font-bold text-teal uppercase tracking-wider mb-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Core Expressions
              </div>
              <ul className="space-y-2">
                {skillData.core_expressions.map((exp, i) => (
                  <li key={i} className="text-sm p-2.5 bg-teal-soft/50 text-teal rounded-lg border border-teal/10">{exp}</li>
                ))}
              </ul>
            </div>
            {roleAData.expressions.length > 0 && (
              <div>
                <div className="text-xs font-bold text-ink-muted uppercase tracking-wider mt-4 mb-2">Left behind</div>
                <ul className="space-y-2">
                  {roleAData.expressions.map((exp, i) => (
                    <li key={i} className="text-sm p-2.5 bg-stone-light text-ink-soft rounded-lg line-through">{exp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-6 md:py-0">
          <div className="bg-amber-brand text-cream rounded-2xl p-4 shadow-accent mb-4">
            <ArrowRight className="w-8 h-8" />
          </div>
          <div className="text-center px-2">
            <h4 className="font-display font-semibold text-ink">Transfer</h4>
            <div className="mt-4 space-y-2">
              <span className="block text-sm bg-amber-soft text-amber-brand px-3 py-2 rounded-lg font-medium border border-amber-border">Level 2 stays intact</span>
              <span className="block text-sm bg-stone-light text-ink-muted px-3 py-2 rounded-lg font-medium border border-stone">Level 3: Job Task (TBD)</span>
              <span className="block text-sm bg-teal-soft text-teal px-3 py-2 rounded-lg font-medium border border-teal/20">Level 4 adapts</span>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-2xl border-2 border-amber-brand/30 overflow-hidden flex flex-col shadow-card ring-2 ring-amber-brand/10 transition-all duration-300 hover:shadow-card-hover">
          <div className="bg-amber-soft px-5 py-4 border-b border-amber-border">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-brand" />
              <h4 className="font-display font-semibold text-ink">{roleBData.title}</h4>
            </div>
            <p className="text-xs text-ink-muted mt-1">
              {roleBData.execution_context.tools ? roleBData.execution_context.tools.join(', ') : roleBData.execution_context.context}
            </p>
          </div>
          <div className="p-5 space-y-4 flex-grow">
            <div>
              <div className="text-xs font-bold text-teal uppercase tracking-wider mb-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Transferred Core
              </div>
              <ul className="space-y-2">
                {skillData.core_expressions.map((exp, i) => (
                  <li key={i} className="text-sm p-2.5 bg-teal-soft/30 text-teal rounded-lg border border-teal/10 opacity-90">{exp}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-amber-brand uppercase tracking-wider mt-4 mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> New context
              </div>
              {roleBData.expressions.length === 0 ? (
                <p className="text-sm italic text-ink-muted">No additional context required.</p>
              ) : (
                <ul className="space-y-2">
                  {roleBData.expressions.map((exp, i) => (
                    <li key={i} className="text-sm p-2.5 bg-amber-soft text-amber-brand rounded-lg border-l-4 border-amber-brand">{exp}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// —— Context Explorer ——
const ContextExplorer = () => {
  const skill = VERIFIED_SKILLS.gen_ai;
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');

  const getContextContent = (industry) => {
    switch (industry) {
      case 'healthcare': return { title: 'Healthcare', icon: Briefcase, risk: 'Patient Safety & Compliance', task: 'Use approved clinical language', expressions: skill.industries?.healthcare || [] };
      case 'retail': return { title: 'Retail', icon: Globe, risk: 'Promo Accuracy & Brand', task: 'Use product and pricing context', expressions: skill.industries?.retail || [] };
      case 'tech': return { title: 'Software / IT', icon: Code, risk: 'Security & Dependency', task: 'Check security and dependency risk', expressions: skill.industries?.tech || [] };
      default: return null;
    }
  };

  const contextData = getContextContent(selectedIndustry);
  const industries = ['healthcare', 'retail', 'tech'];

  return (
    <div className="space-y-8 opacity-0 animate-fade-in fill-mode-forwards">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal via-teal-muted to-amber-brand p-8 md:p-10 text-cream shadow-card-hover">
        <div className="relative z-10">
          <h3 className="font-display text-2xl md:text-3xl font-semibold flex items-center gap-3">
            <Brain className="w-8 h-8 text-amber-soft" />
            {skill.name}
          </h3>
          <p className="mt-3 text-cream/90 max-w-2xl text-sm md:text-base">
            See how <strong>Work Environment (Execution Context)</strong> changes the requirements for the same skill across industries.
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(254,243,199,.15)_0%,_transparent_50%)]" />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="space-y-2">
          {industries.map((ind) => {
            const data = getContextContent(ind);
            const Icon = data.icon;
            const isActive = selectedIndustry === ind;
            return (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all duration-200 border-2 ${
                  isActive ? 'bg-amber-soft border-amber-brand shadow-card' : 'bg-surface border-stone hover:border-stone-light text-ink-muted hover:text-ink'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-amber-brand' : 'text-ink-soft'}`} />
                <span className={`font-medium ${isActive ? 'text-ink font-display' : ''}`}>{data.title}</span>
              </button>
            );
          })}
        </div>

        <div className="md:col-span-3 bg-surface rounded-2xl border border-stone shadow-card p-6 md:p-8">
          {contextData && (() => {
            const ContextIcon = contextData.icon;
            return (
            <div className="space-y-8">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone pb-6">
                <h4 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                  <ContextIcon className="w-5 h-5 text-teal" />
                  {contextData.title} Environment
                </h4>
                <span className="text-xs font-mono font-semibold text-teal bg-teal-soft px-3 py-1.5 rounded-lg">Execution Context</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-display font-semibold text-ink mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-teal" />
                    Core Skill Expressions
                  </h5>
                  <ul className="space-y-2">
                    {skill.core_expressions.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckCircle className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-soft/50 rounded-xl p-5 border border-amber-border">
                  <h5 className="font-display font-semibold text-ink mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-brand" />
                    Industry-Specific Tasks
                  </h5>
                  <ul className="space-y-2 mb-4">
                    {contextData.expressions.map((exp, i) => (
                      <li key={i} className="text-sm font-medium text-ink bg-surface p-2.5 rounded-lg border border-stone">{exp}</li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-amber-border space-y-2 text-sm">
                    <div><span className="font-semibold text-ink-muted uppercase text-xs">Risk:</span> <span className="text-ink">{contextData.risk}</span></div>
                    <div><span className="font-semibold text-ink-muted uppercase text-xs">Task:</span> <span className="text-ink italic">"{contextData.task}"</span></div>
                  </div>
                </div>
              </div>
            </div>
          ); })()}
        </div>
      </div>
    </div>
  );
};

// —— App ——
const App = () => {
  const [activeTab, setActiveTab] = useState('concept');

  const tabs = [
    { id: 'concept', label: '1. Concept Explained' },
    { id: 'simulator', label: '2. Job Switch Simulator' },
    { id: 'context', label: '3. Environment Explorer' }
  ];

  return (
    <div className="min-h-screen bg-cream text-ink font-body relative" style={{ zIndex: 0 }}>
      <header className="sticky top-0 z-10 bg-cream/95 backdrop-blur-sm border-b border-stone">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-brand text-cream p-2 rounded-xl shadow-accent">
              <Layers className="w-5 h-5" />
            </div>
            <h1 className="font-display font-semibold text-lg md:text-xl tracking-tight text-ink">Verified Skill Framework</h1>
          </div>
          <span className="text-xs text-ink-muted uppercase tracking-widest hidden sm:inline">Jan 2026</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="Sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${
                activeTab === tab.id
                  ? 'bg-ink text-cream border-ink shadow-card'
                  : 'bg-surface border-stone text-ink-muted hover:text-ink hover:border-stone-light'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="min-h-[520px]">
          {activeTab === 'concept' && <ConceptView />}
          {activeTab === 'simulator' && <TransferSimulator />}
          {activeTab === 'context' && <ContextExplorer />}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 md:px-6 py-8 mt-16 border-t border-stone text-center">
        <p className="text-xs text-ink-muted uppercase tracking-widest">Verified Skill Definition and Transferrability Framework · Coursera Content Strategy</p>
      </footer>
    </div>
  );
};

export default App;
