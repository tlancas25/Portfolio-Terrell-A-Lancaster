import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  }

  return (
    <section id="projects">
      <h2 className="font-stencil text-3xl font-bold tracking-wider">
        Mission Briefs
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projectsData.map((project) => {
          const image = getImage(project.image.id);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all border-secondary hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <CardHeader>
                <CardTitle className="font-tactical text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-md">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                 <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className='font-mono'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" className="gap-2 font-mono hover:text-black hover:bg-accent hover:border-accent">
                   <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                     <Github />
                     View on GitHub
                   </Link>
                 </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
