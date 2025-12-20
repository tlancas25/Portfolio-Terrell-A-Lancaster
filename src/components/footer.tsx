import { resumeData } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-6 md:px-6">
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {currentYear} {resumeData.identity.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
