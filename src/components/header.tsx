import { resumeData } from '@/lib/data';

export function Header() {
  return (
    <header className="ledger-header border-b border-tactical-blue/50 bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="title-block flex flex-col">
          <h1 className="font-stencil text-2xl font-bold tracking-wider text-tactical-blue glow-blue sm:text-3xl uppercase">
            {resumeData.identity.name}
          </h1>
          <p className="text-sm font-tactical text-alert-amber sm:text-base">
            ACCESS LEVEL: <span className="text-muted-foreground">{resumeData.identity.title}</span>
          </p>
        </div>
        <div className="status-badge hidden md:flex items-center gap-4">
          <div className="text-muted-foreground">
            SIGNAL: <span className="text-terminal-green">ENCRYPTED</span>
          </div>
          <div className="text-muted-foreground">
            UPLINK: <span className="blink text-terminal-green">● ACTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
