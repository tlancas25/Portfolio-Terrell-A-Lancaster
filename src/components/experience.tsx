import { resumeData } from '@/lib/data';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="font-stencil text-3xl font-bold tracking-wider text-primary">
          System Logs
        </h2>
        <span className="animate-pulse font-mono text-xs text-accent">_dumping_core_data</span>
      </div>
      
      <div className="rounded-lg border border-border bg-black/90 font-mono text-xs md:text-sm shadow-inner overflow-hidden">
        <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-4 py-2 text-[10px] text-muted-foreground tracking-wider">
             <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                <span className="ml-2">/var/log/user_data/full_resume.txt</span>
             </div>
             <span>MODE: READ_ONLY</span>
        </div>
        
        <div className="p-6 space-y-2 text-muted-foreground/80 overflow-x-auto">
            <div className="text-accent mb-6">
                <span className="text-green-500">guest@portfolio:~$</span> cat terrell_lancaster_resume.txt
            </div>

            {/* HEADER */}
            <div className="border-l-2 border-accent/20 pl-4 mb-6">
                <div className="text-primary font-bold text-lg md:text-xl tracking-wider">{resumeData.identity.name.toUpperCase()}</div>
                <div className="text-accent font-medium">{resumeData.identity.title}</div>
                <div className="text-xs mt-1 space-x-2">
                    <span>[{resumeData.identity.location.city}, {resumeData.identity.location.state}]</span>
                    <span>::</span>
                    <span>[{resumeData.identity.clearance}]</span>
                </div>
            </div>

            <div className="mb-6 opacity-50">--------------------------------------------------------------------------------</div>

            {/* SUMMARY */}
            <div className="mb-6">
                <div className="text-primary font-bold mb-2 uppercase tracking-wide text-xs">01 // Professional Summary</div>
                <p className="leading-relaxed text-foreground/90 max-w-[85ch] pl-4 border-l border-border">
                    {resumeData.summary}
                </p>
            </div>

            {/* EXPERTISE */}
            <div className="mb-6">
                <div className="text-primary font-bold mb-2 uppercase tracking-wide text-xs">02 // Core Competencies</div>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-y-2 pl-4 border-l border-border">
                    <span className="text-accent font-bold">CYBER_SEC:</span>
                    <span className="text-foreground/80">{resumeData.skills.cybersecurity.join(", ")}</span>
                    
                    <span className="text-accent font-bold">IT_OPS:</span>
                    <span className="text-foreground/80">{resumeData.skills.it_ops.join(", ")}</span>
                    
                    <span className="text-accent font-bold">DEV_TOOLS:</span>
                    <span className="text-foreground/80">{resumeData.skills.dev.join(", ")}</span>
                </div>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-6">
                <div className="text-primary font-bold mb-4 uppercase tracking-wide text-xs">03 // Mission History</div>
                <div className="space-y-6 pl-4 border-l border-border">
                    {resumeData.history.map((job, i) => (
                        <div key={i} className="relative">
                            {/* Decorative timeline dot */}
                            <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-accent/50"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                                <span className="font-bold text-foreground text-base">{job.role}</span>
                                <span className="text-accent text-xs font-bold bg-accent/10 px-2 py-0.5 rounded">{job.dates}</span>
                            </div>
                            <div className="text-sm text-primary/70 mb-2 uppercase tracking-tight">{job.company}</div>
                            <p className="text-sm leading-relaxed max-w-[80ch]">{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="mb-6">
                <div className="text-primary font-bold mb-2 uppercase tracking-wide text-xs">04 // Credentials</div>
                <div className="flex flex-wrap gap-2 pl-4 border-l border-border">
                    {resumeData.certifications.map((cert, i) => (
                        <span key={i} className="inline-flex items-center text-xs border border-accent/20 bg-accent/5 px-2 py-1 rounded text-foreground/80">
                            {cert}
                        </span>
                    ))}
                </div>
            </div>

             <div className="mt-8 pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-green-500">guest@portfolio:~$</span>
                    <span>wget --output-document=resume.pdf secure_server/terrell_lancaster.pdf</span>
                </div>
                
                <div className="pl-4 border-l-2 border-accent/50 animate-in fade-in duration-1000">
                    <div className="text-xs text-muted-foreground mb-2">
                        Resolving host... OK<br/>
                        Connecting to secure_server... CONNECTED<br/>
                        HTTP request sent, awaiting response... 200 OK<br/>
                    </div>
                    <Button asChild variant="outline" size="sm" className="gap-2 font-mono text-xs border-accent text-accent hover:bg-accent hover:text-black">
                        <a href="/resume.pdf" download="Terrell_Lancaster_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                            DOWNLOAD_FILE [1.2MB]
                        </a>
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-green-500">guest@portfolio:~$</span>
                    <span className="w-2 h-4 bg-accent/50 animate-pulse block"></span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
