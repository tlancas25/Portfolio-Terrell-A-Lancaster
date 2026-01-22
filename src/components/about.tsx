import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Shield, Target, Zap, Clock, Dumbbell } from 'lucide-react';
import Script from 'next/script';

const narrativeIcons = {
  "Owner Mindset": Target,
  "Hybrid Threat": Zap,
  "Proven Reliability": Clock,
  "Physical Capability": Dumbbell,
};

export function About() {
  return (
    <section id="about" className="space-y-8">
      {/* Main Briefing */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="mission-node" data-hash="0xAB0UT_M3">
          <div className="node-marker"></div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-tactical-blue" />
            <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
              Operative Briefing
            </h2>
          </div>
          
          {/* Brand & Title */}
          <div className="mb-4 p-3 border border-tactical-blue/20 bg-tactical-blue/5 rounded">
            <div className="text-xs text-alert-amber font-mono uppercase tracking-wider mb-1">Codename</div>
            <div className="text-xl font-bold text-tactical-blue">&quot;{resumeData.identity.brand}&quot;</div>
            <div className="text-sm text-muted-foreground mt-1">{resumeData.identity.tagline}</div>
          </div>
          
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">{resumeData.summary}</p>
          
          {/* Education */}
          <div className="mt-6 p-3 border border-accent/20 bg-accent/5 rounded">
            <div className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Current Mission</div>
            <div className="font-bold text-foreground">{resumeData.education.degree}</div>
            <div className="text-sm text-muted-foreground">{resumeData.education.institution} • {resumeData.education.status}</div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="large" 
              data-theme="dark" 
              data-type="VERTICAL" 
              data-vanity="tlancas" 
              data-version="v1"
          >
              <a 
                  className="badge-base__link LI-simple-link" 
                  href="https://www.linkedin.com/in/tlancas?trk=profile-badge"
              >
                  Terrell Lancaster
              </a>
          </div>
          <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
        </div>
      </div>

      {/* Key Value Propositions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resumeData.keyNarratives.map((narrative) => {
          const IconComponent = narrativeIcons[narrative.title as keyof typeof narrativeIcons] || Target;
          return (
            <div key={narrative.title} className="p-4 border border-tactical-blue/20 bg-tactical-blue/5 rounded hover:bg-tactical-blue/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <IconComponent className="h-4 w-4 text-alert-amber" />
                <span className="font-bold text-sm text-tactical-blue uppercase tracking-wide">{narrative.title}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{narrative.description}</p>
            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-semibold tracking-tight font-tactical text-alert-amber uppercase mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {resumeData.certifications.map((cert) => (
            <div key={cert.name} className="tech-tag flex items-center justify-between gap-2 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-xs">{cert.name}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <span className="text-accent">✓ {cert.status}</span> • {cert.date}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
