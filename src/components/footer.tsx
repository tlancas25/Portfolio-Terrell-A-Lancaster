import { resumeData } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-tactical-blue/30 bg-background/80">
            <div className="container mx-auto px-4 py-6 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-center text-sm text-muted-foreground font-mono">
                        &copy; {currentYear} <span className="text-tactical-blue">{resumeData.identity.name}</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <span>SYSTEM: <span className="text-accent">ACTIVE</span></span>
                        <span>ENCRYPTION: <span className="text-accent">AES-256</span></span>
                        <span className="text-alert-amber blink">● SECURE</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
