import { ShieldCheck, MapPin, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section>
      <div className="rounded-lg border bg-secondary/20 p-4 shadow-inner">
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <ShieldCheck className="h-5 w-5" />
              <span>System Status</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
              </span>
              <span className="font-headline text-2xl font-bold text-accent">
                Online
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Location</span>
            </div>
            <span className="font-headline text-2xl font-bold text-primary">
              Las Vegas, NV
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-md p-4">
            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Uptime</span>
            </div>
            <span className="font-headline text-2xl font-bold text-primary">
              100%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
