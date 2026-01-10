import { resumeData } from '@/lib/data';
import { Button } from './ui/button';
import { Download, Crosshair } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center gap-2">
        <Crosshair className="h-6 w-6 text-tactical-blue" />
        <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
          Mission History
        </h2>
        <span className="animate-pulse font-mono text-xs text-alert-amber">_classified_records</span>
      </div>
      
      <div className="rounded-lg border border-tactical-blue/30 bg-black/90 font-mono text-xs md:text-sm shadow-inner overflow-hidden">
        <div className="flex items-center justify-between border-b border-tactical-blue/20 bg-tactical-blue/5 px-4 py-2 text-[10px] text-tactical-blue tracking-wider">
             <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                <div className="h-2 w-2 rounded-full bg-alert-amber/50"></div>
                <div className="h-2 w-2 rounded-full bg-accent/50"></div>
                <span className="ml-2">/var/log/classified/full_dossier.txt</span>
             </div>
             <span className="text-alert-amber">MODE: TOP_SECRET</span>
        </div>
        
        <div className="p-6 space-y-2 text-muted-foreground/80 overflow-x-auto">
            <div className="text-tactical-blue mb-6">
                <span className="text-accent">agent@secure_terminal:~$</span> cat operative_dossier.txt
            </div>

            {/* HEADER */}
            <div className="border-l-2 border-tactical-blue/40 pl-4 mb-6">
                <div className="text-tactical-blue font-bold text-lg md:text-xl tracking-wider glow-blue">{resumeData.identity.name.toUpperCase()}</div>
                <div className="text-alert-amber font-medium">{resumeData.identity.title}</div>
                <div className="text-xs mt-1 space-x-2">
                    <span>[{resumeData.identity.location.city}, {resumeData.identity.location.state}]</span>
                    <span>::</span>
                    <span className="text-accent">[{resumeData.identity.clearance}]</span>
                </div>
            </div>

            <div className="mb-6 opacity-30 text-tactical-blue">================================================================================</div>

            {/* SUMMARY */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">01 // Operative Summary</div>
                <p className="leading-relaxed text-foreground/90 max-w-[85ch] pl-4 border-l border-tactical-blue/20">
                    {resumeData.summary}
                </p>
            </div>

            {/* EXPERTISE */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">02 // Tactical Expertise</div>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-y-2 pl-4 border-l border-tactical-blue/20">
                    <span className="text-alert-amber font-bold">CYBER_SEC:</span>
                    <span className="text-foreground/80">{resumeData.skills.cybersecurity.join(", ")}</span>
                    
                    <span className="text-alert-amber font-bold">IT_OPS:</span>
                    <span className="text-foreground/80">{resumeData.skills.it_ops.join(", ")}</span>
                    
                    <span className="text-alert-amber font-bold">DEV_TOOLS:</span>
                    <span className="text-foreground/80">{resumeData.skills.dev.join(", ")}</span>
                </div>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-4 uppercase tracking-wide text-xs">03 // Operation Log</div>
                <div className="space-y-6 pl-4 border-l border-tactical-blue/20">
                    {resumeData.history.map((job, i) => (
                        <div key={i} className="relative group">
                            {/* Decorative timeline dot */}
                            <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-tactical-blue/50 group-hover:bg-accent transition-colors"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                                <span className="font-bold text-foreground text-base">{job.role}</span>
                                <span className="text-alert-amber text-xs font-bold bg-alert-amber/10 px-2 py-0.5 rounded border border-alert-amber/20">[ {job.dates} ]</span>
                            </div>
                            <div className="text-sm text-tactical-blue/70 mb-2 uppercase tracking-tight">{job.company} // OPERATIONS DIV</div>
                            <p className="text-sm leading-relaxed max-w-[80ch]">{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">04 // Security Clearances</div>
                <div className="flex flex-wrap gap-2 pl-4 border-l border-tactical-blue/20">
                    {resumeData.certifications.map((cert, i) => (
                        <span key={i} className="tech-tag">
                            {cert}
                        </span>
                    ))}
                </div>
            </div>

             <div className="mt-8 pt-4 border-t border-tactical-blue/20 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-accent">agent@secure_terminal:~$</span>
                    <span>wget --output-document=dossier.pdf secure_vault/terrell_lancaster.pdf</span>
                </div>
                
                <div className="pl-4 border-l-2 border-tactical-blue/50 animate-in fade-in duration-1000">
                    <div className="text-xs text-muted-foreground mb-2">
                        Resolving host... <span className="text-accent">OK</span><br/>
                        Connecting to secure_vault... <span className="text-accent">ENCRYPTED</span><br/>
                        HTTP request sent, awaiting response... <span className="text-tactical-blue">200 OK</span><br/>
                    </div>
                    <Button asChild variant="outline" size="sm" className="gap-2 font-mono text-xs border-tactical-blue text-tactical-blue hover:bg-tactical-blue hover:text-black">
                        <a href="/resume.pdf" download="Terrell_Lancaster_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                            EXTRACT_FILE [1.2MB]
                        </a>
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-accent">agent@secure_terminal:~$</span>
                    <span className="w-2 h-4 bg-tactical-blue/50 animate-pulse block"></span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
