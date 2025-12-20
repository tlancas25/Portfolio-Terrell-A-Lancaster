import { ShieldCheck, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section>
      <div className="rounded-lg border border-accent/20 bg-secondary/20 p-4 shadow-inner">
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-tactical-blue" />
              <span className="font-mono">System Status</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
              </span>
              <span className="font-stencil text-2xl font-bold tracking-wider text-accent">
                OPERATIONAL
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <MapPin className="h-5 w-5 text-tactical-blue" />
              <span className="font-mono">Location</span>
            </div>
            <span className="font-stencil text-2xl font-bold tracking-wider text-primary">
              Las Vegas, NV
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tactical-blue"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="font-mono">Uptime</span>
            </div>
            <span className="font-stencil text-2xl font-bold tracking-wider text-primary">
              99.97%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
