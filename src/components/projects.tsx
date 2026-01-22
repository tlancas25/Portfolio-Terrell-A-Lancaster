import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, FolderOpen, ExternalLink, FileText, CheckCircle, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  image: {
    id: string;
  };
  gallery?: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  }

  // Use a fallback image if none matches
  const fallbackImage = PlaceHolderImages[0];

  return (
    <section id="projects">
      <div className="flex items-center gap-2 mb-6">
          <FolderOpen className="h-6 w-6 text-tactical-blue" />
          <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
            Operation Directives
          </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, idx) => {
          const mainImage = getImage(project.image.id) || (project.image.id === 'placeholder' ? null : fallbackImage);
          const galleryIds = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image.id];
          
          return (
            <div key={project.id} className="group relative">
               {/* Decorative corner markers */}
               <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l-2 border-t-2 border-tactical-blue opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -right-[1px] -top-[1px] h-4 w-4 border-r-2 border-t-2 border-tactical-blue opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 border-tactical-blue opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-tactical-blue opacity-50 transition-opacity group-hover:opacity-100"></div>

              <Card className="flex h-full flex-col overflow-hidden border border-tactical-blue/20 bg-tactical-blue/5 transition-all hover:bg-tactical-blue/10">
                <CardHeader className="border-b border-tactical-blue/10 pb-4">
                   <div className="flex justify-between items-start">
                        <div>
                             <div className="mb-1 text-xs font-mono text-alert-amber">CASE_FILE_0{idx + 1}</div>
                            <CardTitle className="font-stencil text-2xl tracking-wide text-tactical-blue">{project.title}</CardTitle>
                        </div>
                   </div>
                  <CardDescription className="font-mono text-xs pt-2 line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 pt-4">
                  {mainImage ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-tactical-blue/20 bg-secondary/50 cursor-pointer group/image">
                                {/* Scanline overlay */}
                                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(14,165,233,0.1)_50%)] bg-[size:100%_4px] opacity-30 pointer-events-none"></div>
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity group-hover/image:opacity-100 bg-black/50">
                                    <Maximize2 className="h-8 w-8 text-tactical-blue drop-shadow-[0_0_5px_rgba(14,165,233,0.8)]" />
                                </div>
                                <Image
                                    src={mainImage.imageUrl}
                                    alt={mainImage.description}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                    data-ai-hint={mainImage.imageHint}
                                />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl bg-black/95 border-tactical-blue/50 p-0 overflow-hidden">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Image Gallery: {project.title}</DialogTitle>
                            </DialogHeader>
                            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                                <Carousel className="w-full max-w-4xl">
                                    <CarouselContent>
                                        {galleryIds.map((imgId, index) => {
                                            const imgData = getImage(imgId) || fallbackImage;
                                            return (
                                                <CarouselItem key={index}>
                                                    <div className="relative aspect-video w-full">
                                                        <Image
                                                            src={imgData.imageUrl}
                                                            alt={imgData.description}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4 bg-black/50 border-tactical-blue/50 text-tactical-blue hover:bg-tactical-blue hover:text-black" />
                                    <CarouselNext className="right-4 bg-black/50 border-tactical-blue/50 text-tactical-blue hover:bg-tactical-blue hover:text-black" />
                                </Carousel>
                            </div>
                        </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-tactical-blue/20 bg-secondary/20 font-mono text-xs text-muted-foreground">
                        [NO_IMG_DATA]
                    </div>
                  )}
                   <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-tactical-blue/10 bg-black/20 pt-4 gap-2 flex-wrap">
                  {project.demoLink && (
                    <Button asChild variant="ghost" size="sm" className="flex-1 min-w-[120px] justify-between font-mono text-xs text-accent hover:bg-accent hover:text-black border border-accent/30">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> LIVE_DEMO</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="ghost" size="sm" className="flex-1 min-w-[120px] justify-between font-mono text-xs text-muted-foreground hover:text-foreground border border-muted-foreground/30 hover:bg-muted-foreground/10">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2"><Github className="h-4 w-4" /> CODE</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                  </Button>
                   <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="flex-1 min-w-[120px] justify-between font-mono text-xs text-tactical-blue hover:bg-tactical-blue hover:text-black border border-tactical-blue/30">
                            <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> VIEW_BRIEFING</span>
                            <ExternalLink className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-black/95 border-tactical-blue/50 text-foreground font-mono max-h-[90vh] p-0 overflow-hidden">
                          <DialogHeader className="px-6 py-4 border-b border-tactical-blue/20 bg-tactical-blue/5">
                              <DialogTitle className="font-stencil text-2xl tracking-wider text-tactical-blue glow-blue">MISSION REPORT: {project.title}</DialogTitle>
                              <DialogDescription className="text-xs font-mono text-alert-amber">
                                  CLASSIFICATION: TOP_SECRET // AUTHOR: T. LANCASTER
                              </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-full max-h-[calc(90vh-100px)] p-6">
                              <div className="space-y-6">
                                  {/* Overview */}
                                  <section>
                                      <h3 className="text-lg font-bold text-tactical-blue mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-tactical-blue rounded-full"></div>
                                          1.0 OPERATIONAL OVERVIEW
                                      </h3>
                                      <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-tactical-blue/20">
                                          {project.description}
                                      </p>
                                  </section>

                                  {/* Tech Stack Detail */}
                                  <section>
                                      <h3 className="text-lg font-bold text-tactical-blue mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-tactical-blue rounded-full"></div>
                                          2.0 TECHNICAL ARSENAL
                                      </h3>
                                      <div className="pl-4 border-l border-tactical-blue/20">
                                          <div className="flex flex-wrap gap-2 mb-4">
                                              {project.techStack.map((tech) => (
                                                  <span key={tech} className="tech-tag">
                                                      {tech}
                                                  </span>
                                              ))}
                                          </div>
                                          <p className="text-xs text-muted-foreground">
                                              Additional infrastructure and deployment details available in the repository manifest.
                                          </p>
                                      </div>
                                  </section>

                                  {/* Key Features (Mocked based on description for now, ideally this comes from data) */}
                                  <section>
                                      <h3 className="text-lg font-bold text-tactical-blue mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-tactical-blue rounded-full"></div>
                                          3.0 CORE CAPABILITIES
                                      </h3>
                                      <ul className="pl-4 border-l border-tactical-blue/20 space-y-2 text-sm text-muted-foreground">
                                          <li className="flex items-start gap-2">
                                              <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                                              <span>Automated Credit Report Analysis with AI Integration.</span>
                                          </li>
                                          <li className="flex items-start gap-2">
                                              <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                                              <span>Smart Dispute Letter Generation (Legally Compliant).</span>
                                          </li>
                                          <li className="flex items-start gap-2">
                                              <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                                              <span>Real-time Client Dashboard & Progress Tracking.</span>
                                          </li>
                                          <li className="flex items-start gap-2">
                                              <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                                              <span>Enterprise-Grade Security (Firebase Auth, Encryption).</span>
                                          </li>
                                      </ul>
                                  </section>

                                  {/* Architecture */}
                                  <section>
                                      <h3 className="text-lg font-bold text-tactical-blue mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-tactical-blue rounded-full"></div>
                                          4.0 SYSTEM ARCHITECTURE
                                      </h3>
                                      <div className="pl-4 border-l border-tactical-blue/20">
                                          <div className="bg-tactical-blue/5 border border-tactical-blue/20 p-4 rounded text-xs text-muted-foreground font-mono whitespace-pre-wrap">
{`src/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Mission Control
│   ├── clients/            # Client Mgmt
│   └── ai-assistant/       # AI Analysis
├── services/               # Business Logic
│   ├── ai.ts               # Integration
│   └── firebase.ts         # Infrastructure
└── components/             # UI Systems`}
                                          </div>
                                      </div>
                                  </section>

                                  {/* Footer Action */}
                                  <div className="pt-6 mt-6 border-t border-tactical-blue/20">
                                      <Button asChild className="w-full bg-tactical-blue text-black hover:bg-tactical-blue/80 font-bold">
                                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                              <Github className="mr-2 h-4 w-4" />
                                              ACCESS REPOSITORY SECURE CHANNEL
                                          </Link>
                                      </Button>
                                  </div>
                              </div>
                          </ScrollArea>
                      </DialogContent>
                   </Dialog>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
