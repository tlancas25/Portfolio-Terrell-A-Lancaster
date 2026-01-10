import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Code, Cog, Shield, Server, Monitor } from 'lucide-react';

const categoryConfig = {
  cloud: { 
    icon: Cloud, 
    label: "Cloud Architecture (GCP)", 
    color: "text-tactical-blue",
    description: "Google Cloud Platform Infrastructure"
  },
  cybersecurity: { 
    icon: Shield, 
    label: "Cybersecurity & Ops", 
    color: "text-accent",
    description: "Defense, Network Security, Compliance"
  },
  dev: { 
    icon: Code, 
    label: "Development Stack", 
    color: "text-alert-amber",
    description: "Languages, Frameworks, Tools"
  },
  it_ops: { 
    icon: Monitor, 
    label: "IT Support & Hardware", 
    color: "text-tactical-blue",
    description: "Systems, Admin, Hardware"
  },
};

export function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center gap-2 mb-6">
        <Server className="h-6 w-6 text-tactical-blue" />
        <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
          Technical Arsenal
        </h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {Object.entries(resumeData.skills).map(([category, skills]) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          const IconComponent = config?.icon || Cog;
          return (
            <Card key={category} className="border-tactical-blue/30 bg-tactical-blue/5 hover:bg-tactical-blue/10 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className={`text-lg font-tactical font-medium ${config?.color || 'text-tactical-blue'}`}>
                      {config?.label || category.replace('_', ' ')}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">{config?.description}</p>
                  </div>
                  <div className={config?.color || 'text-alert-amber'}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-tag text-[11px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
