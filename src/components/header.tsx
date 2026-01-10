import { resumeData } from '@/lib/data';

export function Header() {
  return (
    <header className="ledger-header border-b border-tactical-blue/50 bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="title-block flex flex-col">
          <h1 className="font-stencil text-2xl font-bold tracking-wider text-tactical-blue glow-blue sm:text-3xl uppercase">
            {resumeData.identity.name}
          </h1>
          <p className="text-xs sm:text-sm font-tactical text-muted-foreground">
            {resumeData.identity.title}
          </p>
          <p className="text-[10px] sm:text-xs font-mono text-alert-amber mt-1">
            Codename: &quot;{resumeData.identity.brand}&quot;
          </p>
        </div>
        <div className="status-badge hidden md:flex items-center gap-4">
          <div className="text-muted-foreground text-xs">
            CLEARANCE: <span className="text-accent">TS CAPABLE</span>
          </div>
          <div className="text-muted-foreground text-xs">
            SLA: <span className="text-tactical-blue">&lt;15 MIN</span>
          </div>
          <div className="text-muted-foreground text-xs">
            STATUS: <span className="blink text-terminal-green">● ACTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
