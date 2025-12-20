import { resumeData } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex flex-col">
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {resumeData.name}
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            {resumeData.title}
          </p>
        </div>
      </div>
    </header>
  );
}
