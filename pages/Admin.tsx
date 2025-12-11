import React, { useState } from 'react';
import { AgentType, GeneratedProductDraft, Product } from '../types';
import { generateProductConcept } from '../services/geminiService';
import { Bot, Sparkles, BarChart2, Save, AlertCircle, FileText, Image as ImageIcon, Megaphone, Layout, Search as SearchIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Alert from '../components/Alert';

interface AdminProps {
  onAddProduct: (product: Product) => void;
  products: Product[];
}

const SALES_DATA = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 300 },
  { name: 'Wed', sales: 600 },
  { name: 'Thu', sales: 800 },
  { name: 'Fri', sales: 500 },
  { name: 'Sat', sales: 900 },
  { name: 'Sun', sales: 700 },
];

const Admin: React.FC<AdminProps> = ({ onAddProduct, products }) => {
  const [topic, setTopic] = useState('');
  const [agentType, setAgentType] = useState<AgentType>(AgentType.EBOOK);
  const [isGenerating, setIsGenerating] = useState(false);
  const [draft, setDraft] = useState<GeneratedProductDraft | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'generator'>('generator');
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError("Please enter a niche or topic to generate a product.");
      return;
    }
    
    setIsGenerating(true);
    setDraft(null);
    setError(null);
    setSuccess(null);
    
    try {
      const result = await generateProductConcept(agentType, topic);
      if (result) {
        setDraft(result);
        setSuccess("Product concept generated successfully! Review the draft below.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePublish = () => {
    if (!draft) return;
    
    try {
      const newProduct: Product = {
        id: `ai-${Date.now()}`,
        title: draft.title,
        description: draft.description,
        price: draft.price,
        category: draft.category as any,
        features: draft.features,
        imageUrl: `https://picsum.photos/400/300?random=${Date.now()}`,
        aiGenerated: true,
        rating: 0,
        reviews: 0
      };

      onAddProduct(newProduct);
      setDraft(null);
      setTopic('');
      setSuccess(`"${draft.title}" has been published to the marketplace!`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError("Failed to publish the product. Please try again.");
    }
  };

  const dismissAlerts = () => {
    setError(null);
    setSuccess(null);
  };

  const getAgentIcon = (type: AgentType) => {
    switch (type) {
      case AgentType.EBOOK: return <FileText size={18} />;
      case AgentType.PROMPT: return <ImageIcon size={18} />;
      case AgentType.MARKETING: return <Megaphone size={18} />;
      case AgentType.TEMPLATE: return <Layout size={18} />;
      case AgentType.SEO: return <SearchIcon size={18} />;
      default: return <Bot size={18} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <ShieldCheckIcon /> Admin Dashboard
        </h1>
        <div className="flex bg-gray-800 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Overview
          </button>
          <button 
             onClick={() => setActiveTab('generator')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === 'generator' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            AI Product Lab
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {error && <Alert type="error" message={error} onClose={dismissAlerts} />}
        {success && <Alert type="success" message={success} onClose={dismissAlerts} />}
      </div>

      {activeTab === 'dashboard' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BarChart2 size={20} className="text-emerald-400"/> Sales Overview
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SALES_DATA}>
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]}>
                    {SALES_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10b981' : '#a3e635'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Recent Products</h3>
            {products.length === 0 ? (
              <p className="text-gray-400 text-center py-10">No products yet. Go to the Generator to create one!</p>
            ) : (
              <ul className="space-y-4">
                {products.slice(0, 5).map(p => (
                  <li key={p.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-300 truncate mr-4">{p.title}</span>
                    <span className="text-emerald-400 font-mono whitespace-nowrap">${p.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 animate-fadeIn">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Bot className="text-emerald-400" /> AI Product Auto-Creation Engine
            </h2>
            <p className="text-gray-400">Deploy an autonomous agent to research, draft, and package a new digital product.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Input Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select AI Agent</label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.values(AgentType).map(type => (
                    <button
                      key={type}
                      onClick={() => setAgentType(type)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition ${agentType === type ? 'bg-emerald-900/30 border-emerald-500 text-white' : 'bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-700'}`}
                    >
                      <div className={`p-2 rounded-full ${agentType === type ? 'bg-emerald-500 text-black' : 'bg-gray-800 text-gray-500'}`}>
                        {getAgentIcon(type)}
                      </div>
                      <span className="font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Target Niche / Topic</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="e.g., 'Productivity for Remote Workers' or 'Cyberpunk City Art'"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isGenerating && topic) {
                      handleGenerate();
                    }
                  }}
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !topic}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition ${isGenerating ? 'bg-gray-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}`}
              >
                {isGenerating ? (
                  <>Processing with Gemini...</>
                ) : (
                  <><Sparkles size={20} /> Deploy Agent & Generate</>
                )}
              </button>
            </div>

            {/* Output Preview */}
            <div className={`bg-gray-900 rounded-lg p-6 border ${error ? 'border-red-500/50' : 'border-gray-700'} min-h-[400px] flex flex-col`}>
              <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-2">Draft Preview</h3>
              
              {isGenerating ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-gray-500 space-y-4">
                    <Sparkles className="animate-spin text-emerald-500" size={32} />
                    <p className="animate-pulse">Agent is researching market trends...</p>
                 </div>
              ) : draft ? (
                <div className="space-y-4 animate-fadeIn flex-1">
                  <div>
                    <span className="text-xs text-emerald-400 uppercase tracking-wide">{draft.category}</span>
                    <h2 className="text-2xl font-bold text-white">{draft.title}</h2>
                  </div>
                  <p className="text-gray-300">{draft.description}</p>
                  
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <h4 className="font-bold text-white mb-2 text-sm uppercase text-gray-500">Includes</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                      {draft.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <h4 className="font-bold text-white mb-2 text-sm uppercase text-gray-500">Ad Copy</h4>
                    <p className="text-gray-400 text-sm italic border-l-2 border-emerald-500 pl-3">"{draft.marketingCopy}"</p>
                  </div>

                  <div className="flex justify-between items-center pt-4 mt-auto">
                    <div className="text-3xl font-bold text-white">${draft.price}</div>
                    <div className="flex gap-3">
                       <button 
                        onClick={() => {
                          setDraft(null);
                          setSuccess(null);
                          setError(null);
                        }}
                        className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500/10 text-sm font-medium"
                       >
                         Discard
                       </button>
                       <button 
                        onClick={handlePublish}
                        className="px-6 py-2 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                       >
                         <Save size={16} /> Publish
                       </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-600">
                  <Bot size={48} className="mb-4 opacity-30" />
                  <p className="text-center">Agent is standby.<br/><span className="text-sm opacity-50">Select an agent and topic to begin.</span></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Admin;