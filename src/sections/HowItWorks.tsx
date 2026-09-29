import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../utils/contact';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <span>STEP-BY-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            HOW IT <span className="text-cyan-600">WORKS</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            A straightforward, transparent self-drive booking process from vehicle discovery to starting your journey.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            return (
              <div
                key={step.step}
                className="bg-[#F7F9FA] rounded-2xl p-6 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                      {step.step}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 tracking-tight font-display group-hover:text-cyan-600 transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Verified Step</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Please connect with Velora Drive directly via WhatsApp or phone to confirm exact availability and required rental process before beginning your self-drive trip.
          </p>
        </div>
      </div>
    </section>
  );
};
