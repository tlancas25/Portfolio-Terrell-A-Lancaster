import { resumeData } from "@/lib/data";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
       <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 bg-tactical-blue rounded-full animate-pulse"></div>
          <h2 className="font-stencil text-xl font-bold tracking-wider text-tactical-blue uppercase">
            Communication Channels
          </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="space-y-4 p-6 border border-tactical-blue/20 bg-tactical-blue/5 rounded">
            <h3 className="text-sm font-bold text-tactical-blue uppercase mb-4 border-b border-tactical-blue/10 pb-2">Direct Comms</h3>
            
            <div className="flex items-center gap-3">
                <div className="p-2 bg-tactical-blue/10 rounded border border-tactical-blue/20">
                    <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                    <div className="text-[10px] text-muted-foreground uppercase">Email Frequency</div>
                    <a href="mailto:terrell.lancaster@gmail.com" className="text-sm font-mono hover:text-accent transition-colors">
                        terrell.lancaster@gmail.com
                    </a>
                </div>
            </div>

             <div className="flex items-center gap-3">
                <div className="p-2 bg-tactical-blue/10 rounded border border-tactical-blue/20">
                    <Linkedin className="h-4 w-4 text-accent" />
                </div>
                <div>
                    <div className="text-[10px] text-muted-foreground uppercase">Professional Network</div>
                    <Link href="#" className="text-sm font-mono hover:text-accent transition-colors">
                        linkedin.com/in/tlancas25
                    </Link>
                </div>
            </div>

             <div className="flex items-center gap-3">
                <div className="p-2 bg-tactical-blue/10 rounded border border-tactical-blue/20">
                    <Github className="h-4 w-4 text-accent" />
                </div>
                <div>
                    <div className="text-[10px] text-muted-foreground uppercase">Code Repository</div>
                    <Link href="https://github.com/tlancas25" target="_blank" className="text-sm font-mono hover:text-accent transition-colors">
                        github.com/tlancas25
                    </Link>
                </div>
            </div>
        </div>

        {/* Resume Download */}
        <div className="flex flex-col justify-between p-6 border border-tactical-blue/20 bg-tactical-blue/5 rounded">
             <div>
                <h3 className="text-sm font-bold text-tactical-blue uppercase mb-4 border-b border-tactical-blue/10 pb-2">Personnel File</h3>
                <p className="text-xs text-muted-foreground mb-6">
                    Download complete service record and technical capabilities dossier.
                    File includes full employment history, security clearance details, and project portfolio.
                </p>
             </div>
             
             <Button asChild variant="default" className="w-full bg-tactical-blue text-black hover:bg-tactical-blue/80 font-bold group">
                <a href="/resume.pdf" download="Terrell_Lancaster_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    DOWNLOAD DOSSIER [PDF]
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
