import React, { useState } from 'react';
import { Loader2, Send, Sparkles, Wand2 } from 'lucide-react';
import { getSmartEstimate } from '../services/geminiService';
import { EstimateResult } from '../types';

export const SmartQuote: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimateResult | null>(null);

  const handleEstimate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await getSmartEstimate(input);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="smart-quote" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-emerald-900 via-slate-800 to-pink-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative z-10 border border-white/10">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-40 bg-pink-500 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 p-40 bg-emerald-500 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen"></div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 font-semibold text-sm mb-6 backdrop-blur-sm">
                <Sparkles size={16} />
                <span>AI Powered Assistant</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Get an Estimate in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-emerald-400">Seconds</span>
              </h2>
              
              <p className="text-slate-200 text-lg mb-8 leading-relaxed">
                Describe your problem (e.g., "My kitchen sink is clogged" or "I need to paint a 12x12 room"). Our smart AI will instantly estimate the cost and time for you.
              </p>
              
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="E.g., I need to install 2 ceiling fans and fix a switchboard..."
                    className="relative w-full bg-slate-900/80 border border-white/10 rounded-xl p-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 h-40 resize-none text-lg backdrop-blur-xl shadow-inner"
                  />
                </div>
                
                <button
                  onClick={handleEstimate}
                  disabled={loading || !input.trim()}
                  className="w-full bg-gradient-to-r from-emerald-500 to-pink-600 hover:from-emerald-600 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-800 disabled:cursor-not-allowed text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-3 text-lg"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <><Wand2 size={24} /> Generate Estimate</>}
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-pink-500 rounded-3xl rotate-2 opacity-20 blur-lg"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 min-h-[400px] flex flex-col justify-center shadow-2xl">
                {!result && !loading && (
                  <div className="text-center text-slate-300/60 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                      <Sparkles size={40} />
                    </div>
                    <p className="text-lg">Your smart estimate will appear here...</p>
                  </div>
                )}
                
                {loading && (
                  <div className="text-center text-white">
                    <Loader2 className="animate-spin mx-auto mb-6 text-pink-400" size={48} />
                    <p className="text-xl font-medium animate-pulse">Analyzing your request...</p>
                    <p className="text-sm text-emerald-300 mt-2">Consulting our pricing database</p>
                  </div>
                )}

                {result && (
                  <div className="animate-fade-in space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <h3 className="text-xs uppercase tracking-wider text-emerald-300 mb-2 font-bold">Estimated Cost</h3>
                        <p className="text-2xl lg:text-3xl font-bold text-emerald-400 leading-tight">{result.priceRange}</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <h3 className="text-xs uppercase tracking-wider text-pink-300 mb-2 font-bold">Time Needed</h3>
                        <p className="text-xl lg:text-2xl font-bold text-white leading-tight">{result.timeEstimate}</p>
                      </div>
                    </div>

                    <div className="p-5 bg-pink-500/10 rounded-xl border-l-4 border-pink-500">
                      <h3 className="text-xs uppercase tracking-wider text-pink-300 mb-2 font-bold">Pro Tip</h3>
                      <p className="text-white/90 italic text-md">"{result.suggestion}"</p>
                    </div>

                    <div className="pt-2">
                        <button
                          onClick={() => window.open(`https://wa.me/923001234567?text=${encodeURIComponent(result.whatsappMessage)}`, '_blank')}
                          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/30 text-lg transform hover:-translate-y-1"
                        >
                          <Send size={20} /> Book Appointment
                        </button>
                    </div>
                    <p className="text-[10px] text-center text-slate-300/60">
                      *AI estimates are approximate. Final quote provided upon on-site inspection.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};