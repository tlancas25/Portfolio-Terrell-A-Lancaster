import { resumeData } from '@/lib/data';
import { Button } from './ui/button';
import { Download, Crosshair, MapPin } from 'lucide-react';

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
                <div className="text-xs mt-1 flex flex-wrap gap-x-2">
                    <span>[{resumeData.identity.location.city}, {resumeData.identity.location.state}]</span>
                    <span>::</span>
                    <span className="text-accent">[{resumeData.identity.clearance}]</span>
                </div>
                <div className="text-xs mt-2 text-muted-foreground">
                  {resumeData.identity.secondaryTitles?.join(" • ")}
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

            {/* EXPERTISE - Updated for new data structure */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">02 // Tactical Expertise</div>
                <div className="grid grid-cols-1 gap-y-3 pl-4 border-l border-tactical-blue/20">
                    <div>
                      <span className="text-alert-amber font-bold block mb-1">CLOUD_OPS:</span>
                      <span className="text-foreground/80 text-xs">{resumeData.skills.cloud.slice(0, 6).join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-alert-amber font-bold block mb-1">CYBER_SEC:</span>
                      <span className="text-foreground/80 text-xs">{resumeData.skills.cybersecurity.slice(0, 6).join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-alert-amber font-bold block mb-1">DEV_STACK:</span>
                      <span className="text-foreground/80 text-xs">{resumeData.skills.dev.slice(0, 6).join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-alert-amber font-bold block mb-1">IT_SUPPORT:</span>
                      <span className="text-foreground/80 text-xs">{resumeData.skills.it_ops.slice(0, 6).join(", ")}</span>
                    </div>
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
                            
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1 gap-2">
                                <span className="font-bold text-foreground text-base">{job.role}</span>
                                <span className="text-alert-amber text-xs font-bold bg-alert-amber/10 px-2 py-0.5 rounded border border-alert-amber/20 whitespace-nowrap">[ {job.dates} ]</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-tactical-blue/70 mb-2 uppercase tracking-tight">
                              <span>{job.company}</span>
                              {job.location && (
                                <>
                                  <span className="text-muted-foreground">|</span>
                                  <span className="flex items-center gap-1 text-muted-foreground normal-case">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                  </span>
                                </>
                              )}
                            </div>
                            <p className="text-xs leading-relaxed max-w-[80ch]">{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">04 // Certifications</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 border-l border-tactical-blue/20">
                    {resumeData.certifications.map((cert, i) => (
                        <div key={i} className="tech-tag flex justify-between items-center py-1.5">
                            <div className="flex flex-col">
                                <span className="text-[10px]">{cert.name}</span>
                                <span className="text-[9px] text-accent">✓ {cert.status}</span>
                            </div>
                            <span className="text-[9px] text-muted-foreground ml-2">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
                <div className="text-tactical-blue font-bold mb-2 uppercase tracking-wide text-xs">05 // Education</div>
                <div className="pl-4 border-l border-tactical-blue/20">
                    <div className="font-bold text-foreground">{resumeData.education.degree}</div>
                    <div className="text-sm text-tactical-blue/70">{resumeData.education.institution}</div>
                    <div className="text-xs text-accent mt-1">{resumeData.education.status}</div>
                    <div className="text-xs text-muted-foreground mt-2">
                      <span className="text-alert-amber">Coursework:</span> {resumeData.education.coursework.join(", ")}
                    </div>
                </div>
            </div>


        </div>
      </div>
    </section>
  );
}
