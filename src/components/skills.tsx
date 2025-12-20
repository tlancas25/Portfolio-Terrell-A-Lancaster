import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Code, Cog } from 'lucide-react';

const categoryIcons = {
  cloud: <Cloud className="h-6 w-6" />,
  dev: <Code className="h-6 w-6" />,
  ops: <Cog className="h-6 w-6" />,
};

export function Skills() {
  return (
    <section id="skills">
      <h2 className="font-stencil text-3xl font-bold tracking-wider">
        Technical Skills
      </h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <Card key={category} className="border-secondary bg-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-tactical font-medium capitalize">
                {category}
              </CardTitle>
              <div className="text-accent">
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm font-mono">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
