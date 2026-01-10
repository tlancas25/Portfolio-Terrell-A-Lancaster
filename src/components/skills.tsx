import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Code, Cog, Shield } from 'lucide-react';

const categoryIcons = {
  cloud: <Cloud className="h-6 w-6" />,
  dev: <Code className="h-6 w-6" />,
  ops: <Cog className="h-6 w-6" />,
  cybersecurity: <Shield className="h-6 w-6" />,
  it_ops: <Cog className="h-6 w-6" />,
};

export function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center gap-2 mb-4">
        <Code className="h-6 w-6 text-tactical-blue" />
        <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
          Tech Loadout
        </h2>
      </div>
      <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <Card key={category} className="border-tactical-blue/30 bg-tactical-blue/5 hover:bg-tactical-blue/10 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-tactical font-medium capitalize text-tactical-blue">
                {category.replace('_', ' ')}
              </CardTitle>
              <div className="text-alert-amber">
                {categoryIcons[category as keyof typeof categoryIcons] || <Cog className="h-6 w-6" />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
