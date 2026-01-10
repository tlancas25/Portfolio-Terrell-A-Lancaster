import { ShieldCheck, MapPin, Terminal, Cpu, Activity, Server } from 'lucide-react';

export function Hero() {
  return (
    <section>
      <div className="relative rounded-lg border border-tactical-blue/30 bg-tactical-blue/5 p-6 shadow-inner tech-border overflow-hidden">
        {/* Background Grid Animation Effect - Optional enhancement */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0ea5e912_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e912_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Confidential Stamp */}
        <div className="confidential-stamp">Clearance L4</div>
        
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Main Status */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col justify-between rounded-md border border-tactical-blue/20 bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-tactical-blue" />
                <span className="font-mono uppercase tracking-wider">System Status</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                <span className="font-mono text-xs text-accent">LIVE</span>
              </div>
            </div>
            <div className="mt-4">
               <span className="font-stencil text-4xl font-bold tracking-wider text-accent drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                OPERATIONAL
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1">All systems nominal. Ready for deployment.</p>
            </div>
          </div>

          {/* Location Data */}
          <div className="flex flex-col justify-center space-y-2 rounded-md border border-tactical-blue/20 bg-background/50 p-4">
             <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <MapPin className="h-4 w-4 text-alert-amber" />
              <span className="font-mono">Base of Ops</span>
            </div>
            <div className="font-mono text-xl font-bold text-tactical-blue">
              Las Vegas, NV
            </div>
            <div className="font-mono text-xs text-muted-foreground">Coordinates: 36.17° N, 115.14° W</div>
          </div>

           {/* Uptime */}
          <div className="flex flex-col justify-center space-y-2 rounded-md border border-tactical-blue/20 bg-background/50 p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <Activity className="h-4 w-4 text-alert-amber" />
              <span className="font-mono">Availability</span>
            </div>
            <div className="font-mono text-xl font-bold text-tactical-blue">
              99.99%
            </div>
             <div className="h-1.5 w-full rounded-full bg-secondary">
              <div className="h-1.5 w-[99.9%] rounded-full bg-tactical-blue shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
            </div>
          </div>
        
          {/* System Load Mockup */}
           <div className="col-span-1 sm:col-span-2 flex items-center justify-between rounded-md border border-tactical-blue/20 bg-background/50 p-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-8 w-8 text-tactical-blue opacity-70" />
                <div>
                   <div className="font-mono text-xs text-muted-foreground uppercase">Cognitive Load</div>
                   <div className="font-mono text-lg font-bold text-accent">OPTIMIZED</div>
                </div>
              </div>
              <div className="flex gap-1">
                 {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`h-8 w-2 rounded-sm ${i < 4 ? 'bg-tactical-blue/80' : 'bg-secondary'}`}></div>
                 ))}
              </div>
           </div>

            {/* Terminal Mockup */}
           <div className="col-span-1 sm:col-span-2 rounded-md border border-tactical-blue/20 bg-black p-4 font-mono text-xs text-green-500 overflow-hidden">
              <div className="flex items-center gap-2 mb-2 border-b border-tactical-blue/20 pb-1">
                 <Terminal className="h-3 w-3 text-tactical-blue" />
                 <span className="text-tactical-blue">term_v2.0.4</span>
              </div>
              <div className="space-y-1 opacity-80">
                <p><span className="text-tactical-blue">root@portfolio:~$</span> init_sequence --force</p>
                <p className="text-white/70">{`> Loading modules...`}</p>
                <p className="text-white/70">{`> Cloud architecture... OK`}</p>
                 <p className="text-white/70">{`> DevSecOps pipeline... OK`}</p>
                 <p className="animate-pulse text-accent">_</p>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
