import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle, Briefcase, Globe, Code, Database, Brain, Sparkles, Shield, Info, Network, ChevronDown, Lock, RefreshCw, GitMerge } from 'lucide-react';

/**
 * DATA DEFINITIONS
 * Reverted to strict document text for individual skills as requested.
 */

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
        expressions: [], // Document: "None"
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
        execution_context: {
          context: 'Content Creation',
          industry_example: 'Retail'
        }
      },
      software: {
        title: 'Software Developer',
        expressions: [
          'Review generated code for correctness',
          'Check security and dependency risk',
          'Avoid secret leakage'
        ],
        execution_context: {
          context: 'Coding Assistant',
          industry_example: 'Tech'
        }
      },
      data: {
        title: 'Data Professional',
        expressions: [
          'Provide data context and constraints',
          'Detect hallucinations and gaps',
          'Protect sensitive data'
        ],
        execution_context: {
          context: 'Analysis Helper',
          industry_example: 'Healthcare'
        }
      }
    },
    industries: {
      healthcare: [
        'Use approved clinical language',
        'Check safety and compliance risk',
        'De-identify patient data'
      ],
      retail: [
        'Use product and pricing context',
        'Check promo and policy accuracy',
        'Ensure brand consistency'
      ],
      tech: [
        'Review generated code for correctness',
        'Check security and dependency risk',
        'Avoid secret leakage'
      ]
    }
  }
};

/**
 * COMPONENTS
 */

// 1. Framework Concept View
const ConceptView = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [viewMode, setViewMode] = useState('anatomy');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Sub-nav for Concept View */}
      <div className="flex justify-center mb-6">
        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setViewMode('anatomy')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              viewMode === 'anatomy' 
                ? 'bg-white shadow-sm text-blue-700' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Anatomy of a Skill
          </button>
          <button
            onClick={() => setViewMode('hierarchy')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              viewMode === 'hierarchy' 
                ? 'bg-white shadow-sm text-blue-700' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Skill Hierarchy
          </button>
        </div>
      </div>

      {viewMode === 'anatomy' ? (
        /* Original Layered View */
        <>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Naming Formula
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl font-medium text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex flex-col items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md border border-blue-200">The Action</span>
                <span className="text-[10px] text-blue-600 uppercase font-bold mt-1">[Action Verb]</span>
              </div>
              <span className="text-slate-400 pb-4">+</span>
              <div className="flex flex-col items-center">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">The Result</span>
                <span className="text-[10px] text-emerald-600 uppercase font-bold mt-1">[Work Output]</span>
              </div>
              <span className="text-slate-400 pb-4">+</span>
              <div className="flex flex-col items-center">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md border border-purple-200 text-sm italic">(The Context)</span>
                <span className="text-[10px] text-purple-600 uppercase font-bold mt-1">(Context)</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative flex justify-center items-center h-80 bg-slate-50 rounded-xl border border-slate-200">
              <div 
                className={`absolute w-72 h-72 rounded-full border-4 flex items-start justify-center pt-4 transition-all cursor-pointer ${activeLayer === 'execution' ? 'bg-purple-100 border-purple-400 scale-105 shadow-lg' : 'bg-white border-purple-200 text-slate-400'}`}
                onMouseEnter={() => setActiveLayer('execution')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex flex-col items-center mt-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Where (Environment)</span>
                  <span className="text-[10px] italic opacity-75">"Execution Context"</span>
                </div>
              </div>
              
              <div 
                className={`absolute w-52 h-52 rounded-full border-4 flex items-start justify-center pt-4 transition-all cursor-pointer ${activeLayer === 'career' ? 'bg-indigo-100 border-indigo-400 scale-105 shadow-lg' : 'bg-white border-indigo-200 text-slate-400'}`}
                onMouseEnter={() => setActiveLayer('career')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex flex-col items-center mt-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Role Level</span>
                  <span className="text-[10px] italic opacity-75">"Career Context"</span>
                </div>
              </div>

              <div 
                className={`absolute w-32 h-32 rounded-full border-4 flex items-center justify-center transition-all cursor-pointer ${activeLayer === 'core' ? 'bg-blue-100 border-blue-500 scale-110 shadow-xl' : 'bg-blue-50 border-blue-300 text-blue-600'}`}
                onMouseEnter={() => setActiveLayer('core')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="text-center">
                  <Layers className="w-8 h-8 mx-auto mb-1" />
                  <span className="font-bold text-xs block">The Basics</span>
                  <span className="text-[9px] block italic opacity-75 leading-tight mt-0.5">"Core Skill Expressions"</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              <div className={`p-4 rounded-lg border transition-all ${activeLayer === 'core' ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-slate-200'}`}>
                <h4 className="font-bold text-blue-700">1. The Basics (Core Skill)</h4>
                <p className="text-sm text-slate-600 mb-1">The fundamental tasks that never change. You take these with you to any job.</p>
                <p className="text-xs text-slate-400 font-mono">Framework term: Core Skill Expressions</p>
              </div>
              <div className={`p-4 rounded-lg border transition-all ${activeLayer === 'career' ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-slate-200'}`}>
                <h4 className="font-bold text-indigo-700">2. Role Expectations (Career Context)</h4>
                <p className="text-sm text-slate-600 mb-1">Depends on your job title. Higher levels require more complex work.</p>
                <p className="text-xs text-slate-400 font-mono">Framework term: Context-Expanding Skill Expressions</p>
              </div>
              <div className={`p-4 rounded-lg border transition-all ${activeLayer === 'execution' ? 'border-purple-500 bg-purple-50 shadow-md' : 'border-slate-200'}`}>
                <h4 className="font-bold text-purple-700">3. Work Environment (Execution Context)</h4>
                <p className="text-sm text-slate-600 mb-1">Where you work (Industry) and how you work (Tools).</p>
                <p className="text-xs text-slate-400 font-mono">Framework term: Execution Context</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* New Hierarchy View */
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-800">The 4-Level Hierarchy</h3>
            <p className="text-slate-500 mt-2">How Verified Skills fit into a Job Role.</p>
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            
            {/* Level 1: Occupation */}
            <div className="relative group">
              <div className="bg-indigo-600 text-white p-4 rounded-lg shadow-lg text-center z-10 relative">
                <div className="text-xs uppercase tracking-widest font-bold opacity-80 mb-1">Level 1: Occupation Group (Role)</div>
                <div className="text-xl font-bold flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" /> Data Analyst
                </div>
              </div>
              <div className="h-8 w-0.5 bg-indigo-200 mx-auto"></div>
            </div>

            {/* Level 2: Skill Area */}
            <div className="relative group animate-in slide-in-from-top-4 duration-500 delay-100">
              <div className="bg-indigo-100 text-indigo-900 border-2 border-indigo-200 p-4 rounded-lg text-center relative z-10">
                <div className="text-xs uppercase tracking-widest font-bold text-indigo-500 mb-1">Level 2: Skill Area</div>
                <div className="text-lg font-bold flex items-center justify-center gap-2">
                  <Network className="w-5 h-5" /> Data Management
                </div>
                <p className="text-xs text-indigo-600 mt-1 italic">Contains multiple related Verified Skills</p>
              </div>
              <div className="h-8 w-0.5 bg-indigo-200 mx-auto"></div>
            </div>

            {/* Level 3: Verified Skill */}
            <div className="relative group animate-in slide-in-from-top-4 duration-500 delay-200">
              <div className="bg-white text-slate-800 border-2 border-blue-500 p-4 rounded-lg text-center relative z-10 shadow-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  We are here
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Level 3: Verified Skill</div>
                <div className="text-lg font-bold flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" /> Prepare analysis-ready datasets
                </div>
                <p className="text-xs text-slate-500 mt-1">A portable, transferable unit of work.</p>
              </div>
              <div className="h-8 w-0.5 bg-indigo-200 mx-auto"></div>
            </div>

            {/* Level 4: Skill Expressions */}
            <div className="grid grid-cols-2 gap-2 animate-in slide-in-from-top-4 duration-500 delay-300">
               <div className="bg-slate-50 border border-slate-200 p-3 rounded text-center">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Level 4: Expression</div>
                  <div className="text-sm font-medium text-slate-700">Handle missing values</div>
               </div>
               <div className="bg-slate-50 border border-slate-200 p-3 rounded text-center">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Level 4: Expression</div>
                  <div className="text-sm font-medium text-slate-700">Remove duplicate records</div>
               </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

// 2. Transferability Simulator
// UPDATED: Now includes Hierarchy Context Visualization with Level 2
const TransferSimulator = () => {
  const [selectedSkill, setSelectedSkill] = useState('data_prep');
  const [roleA, setRoleA] = useState('analytics');
  const [roleB, setRoleB] = useState('ml_engineering');

  const skillData = VERIFIED_SKILLS[selectedSkill];
  const roleAData = skillData.roles[roleA];
  const roleBData = skillData.roles[roleB];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-100 p-4 rounded-xl">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Select Verified Skill</label>
          <select 
            className="w-full p-2 rounded border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
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
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Source Role</label>
          <select 
            className="w-full p-2 rounded border border-slate-300 shadow-sm outline-none"
            value={roleA}
            onChange={(e) => setRoleA(e.target.value)}
          >
            {Object.entries(skillData.roles).map(([key, val]) => (
              <option key={key} value={key}>{val.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Target Role</label>
          <select 
            className="w-full p-2 rounded border border-slate-300 shadow-sm outline-none"
            value={roleB}
            onChange={(e) => setRoleB(e.target.value)}
          >
            {Object.entries(skillData.roles).map(([key, val]) => (
              <option key={key} value={key}>{val.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Hierarchy Visualization Block */}
      <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Network className="w-4 h-4" /> Hierarchy in Motion
         </h4>
         
         {/* Updated to 4 Columns to show Level 2 */}
         <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            
            {/* Level 1: Variable */}
            <div className="flex-1 bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex items-center gap-3 w-full">
               <div className="p-2 bg-indigo-100 rounded text-indigo-600">
                  <RefreshCw className="w-4 h-4" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-indigo-400">Level 1: Occupation (Variable)</div>
                  <div className="text-xs font-bold text-indigo-900 flex items-center gap-1 mt-1">
                     {roleAData.title} <ArrowRight className="w-3 h-3" /> {roleBData.title}
                  </div>
               </div>
            </div>

            <div className="hidden md:block text-slate-300"><ChevronDown className="w-4 h-4 -rotate-90" /></div>

            {/* Level 2: Skill Area (Constant) */}
            <div className="flex-1 bg-slate-100 border border-slate-200 p-3 rounded-lg flex items-center gap-3 w-full">
               <div className="p-2 bg-white rounded text-slate-600 shadow-sm">
                  <Network className="w-4 h-4" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Level 2: Skill Area (Stable)</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">{skillData.category}</div>
               </div>
            </div>

            <div className="hidden md:block text-slate-300"><ChevronDown className="w-4 h-4 -rotate-90" /></div>

            {/* Level 3: Constant */}
            <div className="flex-1 bg-blue-50 border border-blue-100 p-3 rounded-lg flex items-center gap-3 w-full">
               <div className="p-2 bg-blue-100 rounded text-blue-600">
                  <Lock className="w-4 h-4" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-blue-400">Level 3: Verified Skill (Stable)</div>
                  <div className="text-xs font-bold text-blue-900 mt-1 line-clamp-1">{skillData.name}</div>
               </div>
            </div>

            <div className="hidden md:block text-slate-300"><ChevronDown className="w-4 h-4 -rotate-90" /></div>

             {/* Level 4: Result */}
             <div className="flex-1 bg-green-50 border border-green-100 p-3 rounded-lg flex items-center gap-3 w-full">
               <div className="p-2 bg-green-100 rounded text-green-600">
                  <GitMerge className="w-4 h-4" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-green-600">Level 4: Expressions (Adapts)</div>
                  <div className="text-xs font-bold text-green-900 mt-1">
                     {skillData.core_expressions.length} Core + {roleBData.expressions.length} New
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* Comparison Visualization */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Source Role */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col opacity-75 grayscale-[0.5] hover:grayscale-0 transition-all">
          <div className="bg-slate-50 p-4 border-b border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-slate-500" />
              <h4 className="font-bold text-slate-700">{roleAData.title}</h4>
            </div>
            <div className="text-xs text-slate-500">
              Tooling: {roleAData.execution_context.tools ? roleAData.execution_context.tools.join(', ') : roleAData.execution_context.context}
            </div>
          </div>
          <div className="p-4 space-y-3 flex-grow">
            <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Core Expressions
            </div>
            <ul className="space-y-2">
              {skillData.core_expressions.map((exp, i) => (
                <li key={i} className="text-sm p-2 bg-green-50 text-green-800 rounded border border-green-100">
                  {exp}
                </li>
              ))}
            </ul>
            {roleAData.expressions.length > 0 && (
               <>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-4 mb-2">Old Context (Left Behind)</div>
                <ul className="space-y-2">
                  {roleAData.expressions.map((exp, i) => (
                    <li key={i} className="text-sm p-2 bg-slate-50 text-slate-400 rounded border border-slate-100 line-through">
                      {exp}
                    </li>
                  ))}
                </ul>
               </>
            )}
          </div>
        </div>

        {/* Transfer Logic */}
        <div className="flex flex-col items-center justify-center py-4 md:py-0">
          <div className="bg-blue-600 text-white rounded-full p-3 shadow-lg mb-4">
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="text-center px-4">
            <h4 className="font-bold text-slate-800">Transfer Analysis</h4>
            <div className="mt-4 flex flex-col gap-2 w-full">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium border border-green-200">
                Level 3 (Verified Skill) Stays Intact
              </div>
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded text-sm font-medium border border-amber-200">
                Level 4 Adapts to Level 1
              </div>
            </div>
          </div>
        </div>

        {/* Target Role */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-md overflow-hidden flex flex-col ring-2 ring-blue-100">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-blue-700">{roleBData.title}</h4>
            </div>
            <div className="text-xs text-slate-500">
              Tooling: {roleBData.execution_context.tools ? roleBData.execution_context.tools.join(', ') : roleBData.execution_context.context}
            </div>
          </div>
          <div className="p-4 space-y-3 flex-grow">
            <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Transferred Core
            </div>
            <ul className="space-y-2">
              {skillData.core_expressions.map((exp, i) => (
                <li key={i} className="text-sm p-2 bg-green-50 text-green-800 rounded border border-green-100 opacity-75">
                  {exp}
                </li>
              ))}
            </ul>

            <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-4 mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> New Context Required
            </div>
            {roleBData.expressions.length === 0 ? (
               <div className="text-sm italic text-slate-400">No additional context skills required.</div>
            ) : (
              <ul className="space-y-2">
                {roleBData.expressions.map((exp, i) => (
                  <li key={i} className="text-sm p-2 bg-amber-50 text-amber-900 rounded border border-amber-100 border-l-4 border-l-amber-400">
                    {exp}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Execution Context Details (GenAI Focus)
// UPDATED: Now uses strict original text from the document for skills
const ContextExplorer = () => {
  const skill = VERIFIED_SKILLS.gen_ai;
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');

  // Helper to get custom execution context strings matching document
  const getContextContent = (industry) => {
    switch(industry) {
      case 'healthcare': return {
        title: 'Healthcare',
        icon: <Briefcase className="w-5 h-5" />,
        risk: 'Patient Safety & Compliance',
        task: 'Use approved clinical language',
        // In the doc, healthcare has specific tasks
        expressions: skill.industries?.healthcare || []
      };
      case 'retail': return {
        title: 'Retail',
        icon: <Globe className="w-5 h-5" />,
        risk: 'Promo Accuracy & Brand',
        task: 'Use product and pricing context',
        expressions: skill.industries?.retail || []
      };
      case 'tech': return {
        title: 'Software / IT',
        icon: <Code className="w-5 h-5" />,
        risk: 'Security & Dependency',
        task: 'Check security and dependency risk',
        expressions: skill.industries?.tech || []
      };
      default: return null;
    }
  };

  const contextData = getContextContent(selectedIndustry);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Skill: {skill.name}
        </h3>
        <p className="opacity-90 mt-2 max-w-2xl">
          See how the <strong>Work Environment (Execution Context)</strong> changes the requirements for the same skill across different industries.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar Nav */}
        <div className="space-y-2">
          <button 
            onClick={() => setSelectedIndustry('healthcare')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2 transition-all ${selectedIndustry === 'healthcare' ? 'bg-white shadow border-l-4 border-purple-600 font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Shield className="w-4 h-4" /> Healthcare
          </button>
          <button 
            onClick={() => setSelectedIndustry('retail')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2 transition-all ${selectedIndustry === 'retail' ? 'bg-white shadow border-l-4 border-purple-600 font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Globe className="w-4 h-4" /> Retail
          </button>
          <button 
            onClick={() => setSelectedIndustry('tech')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2 transition-all ${selectedIndustry === 'tech' ? 'bg-white shadow border-l-4 border-purple-600 font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Code className="w-4 h-4" /> Software
          </button>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          {contextData && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  {contextData.icon}
                  {contextData.title} Environment
                </h4>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-mono">
                  Execution Context
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Core Skill Expressions
                  </h5>
                  <ul className="space-y-2 opacity-60">
                    {skill.core_expressions.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2">
                         <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                         <span className="text-sm text-slate-800">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h5 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Industry Specific Tasks
                  </h5>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase text-purple-400">Context-Expanding Expressions</span>
                      <ul className="mt-2 space-y-2">
                        {contextData.expressions.map((exp, i) => (
                          <li key={i} className="text-sm font-medium text-slate-800 bg-white p-2 rounded shadow-sm border border-purple-100">
                             {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t border-purple-200">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-xs font-bold uppercase text-purple-400 w-16 shrink-0">Risk:</span>
                        <span className="text-sm text-slate-700">{contextData.risk}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold uppercase text-purple-400 w-16 shrink-0">Task:</span>
                        <span className="text-sm text-slate-700 italic">"{contextData.task}"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('concept');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md text-white">
              <Layers className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-lg tracking-tight">Verified Skill Framework</h1>
          </div>
          <div className="text-xs text-slate-400 hidden sm:block">Jan 2026 Update</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-1 rounded-lg border border-slate-200 shadow-sm w-fit">
          <button 
            onClick={() => setActiveTab('concept')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'concept' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            1. Concept Explained
          </button>
          <button 
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'simulator' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            2. Job Switch Simulator
          </button>
          <button 
            onClick={() => setActiveTab('context')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'context' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            3. Environment Explorer
          </button>
        </div>

        {/* Content Render */}
        <div className="min-h-[500px]">
          {activeTab === 'concept' && <ConceptView />}
          {activeTab === 'simulator' && <TransferSimulator />}
          {activeTab === 'context' && <ContextExplorer />}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
        <p>Verified Skill Definition and Transferrability Framework • Coursera Content Strategy</p>
      </footer>
    </div>
  );
};

export default App;