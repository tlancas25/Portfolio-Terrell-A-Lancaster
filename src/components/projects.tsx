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
          <FolderOpen className="h-6 w-6 text-accent" />
          <h2 className="font-stencil text-3xl font-bold tracking-wider">
            Project Directives
          </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, idx) => {
          const mainImage = getImage(project.image.id) || (project.image.id === 'placeholder' ? null : fallbackImage);
          const galleryIds = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image.id];
          
          return (
            <div key={project.id} className="group relative">
               {/* Decorative corner markers */}
               <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l-2 border-t-2 border-accent opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -right-[1px] -top-[1px] h-4 w-4 border-r-2 border-t-2 border-accent opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 border-accent opacity-50 transition-opacity group-hover:opacity-100"></div>
               <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-accent opacity-50 transition-opacity group-hover:opacity-100"></div>

              <Card className="flex h-full flex-col overflow-hidden border border-white/10 bg-black/40 transition-all hover:bg-secondary/20">
                <CardHeader className="border-b border-white/5 pb-4">
                   <div className="flex justify-between items-start">
                        <div>
                             <div className="mb-1 text-xs font-mono text-tactical-blue">CASE_FILE_0{idx + 1}</div>
                            <CardTitle className="font-stencil text-2xl tracking-wide">{project.title}</CardTitle>
                        </div>
                        {mainImage && (
                           <div className="text-[10px] font-mono border border-accent/20 px-2 py-1 rounded text-accent/70 bg-accent/5">
                              CLASSIFIED
                           </div>
                        )}
                   </div>
                  <CardDescription className="font-mono text-xs pt-2 line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 pt-4">
                  {mainImage ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-secondary/50 cursor-pointer group/image">
                                {/* Scanline overlay */}
                                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity group-hover/image:opacity-100 bg-black/50">
                                    <Maximize2 className="h-8 w-8 text-accent drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]" />
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
                        <DialogContent className="max-w-5xl bg-black/95 border-accent/50 p-0 overflow-hidden">
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
                                    <CarouselPrevious className="left-4 bg-black/50 border-accent/50 text-accent hover:bg-accent hover:text-black" />
                                    <CarouselNext className="right-4 bg-black/50 border-accent/50 text-accent hover:bg-accent hover:text-black" />
                                </Carousel>
                            </div>
                        </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-white/10 bg-secondary/20 font-mono text-xs text-muted-foreground">
                        [NO_IMG_DATA]
                    </div>
                  )}
                   <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className='font-mono text-[10px] text-accent border-accent/30 bg-accent/5'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/5 bg-black/20 pt-4">
                   <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between font-mono text-xs hover:bg-accent hover:text-black">
                            <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> VIEW_BRIEFING</span>
                            <ExternalLink className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-black/95 border-accent/50 text-foreground font-mono max-h-[90vh] p-0 overflow-hidden">
                          <DialogHeader className="px-6 py-4 border-b border-accent/20 bg-secondary/20">
                              <DialogTitle className="font-stencil text-2xl tracking-wider text-accent">MISSION REPORT: {project.title}</DialogTitle>
                              <DialogDescription className="text-xs font-mono text-muted-foreground">
                                  CLASSIFICATION: UNCLASSIFIED // AUTHOR: T. LANCASTER
                              </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-full max-h-[calc(90vh-100px)] p-6">
                              <div className="space-y-6">
                                  {/* Overview */}
                                  <section>
                                      <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-accent rounded-full"></div>
                                          1.0 OPERATIONAL OVERVIEW
                                      </h3>
                                      <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-accent/20">
                                          {project.description}
                                      </p>
                                  </section>

                                  {/* Tech Stack Detail */}
                                  <section>
                                      <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-accent rounded-full"></div>
                                          2.0 TECHNICAL ARSENAL
                                      </h3>
                                      <div className="pl-4 border-l border-accent/20">
                                          <div className="flex flex-wrap gap-2 mb-4">
                                              {project.techStack.map((tech) => (
                                                  <Badge key={tech} variant="outline" className="border-accent/30 text-accent bg-accent/5">
                                                      {tech}
                                                  </Badge>
                                              ))}
                                          </div>
                                          <p className="text-xs text-muted-foreground">
                                              Additional infrastructure and deployment details available in the repository manifest.
                                          </p>
                                      </div>
                                  </section>

                                  {/* Key Features (Mocked based on description for now, ideally this comes from data) */}
                                  <section>
                                      <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-accent rounded-full"></div>
                                          3.0 CORE CAPABILITIES
                                      </h3>
                                      <ul className="pl-4 border-l border-accent/20 space-y-2 text-sm text-muted-foreground">
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
                                      <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                          <div className="h-2 w-2 bg-accent rounded-full"></div>
                                          4.0 SYSTEM ARCHITECTURE
                                      </h3>
                                      <div className="pl-4 border-l border-accent/20">
                                          <div className="bg-secondary/30 p-4 rounded text-xs text-muted-foreground font-mono whitespace-pre-wrap">
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
                                  <div className="pt-6 mt-6 border-t border-white/10">
                                      <Button asChild className="w-full bg-accent text-black hover:bg-accent/80 font-bold">
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
