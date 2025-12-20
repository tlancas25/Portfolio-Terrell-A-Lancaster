'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { askResumeAgent } from '@/app/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Bot, Loader, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const initialState = {
  message: '',
  answer: 'Ask a question about my resume to get started. For example: "Does Terrell know Python?"',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" aria-label="Send question" disabled={pending}>
      {pending ? <Loader className="animate-spin" /> : <Send />}
    </Button>
  );
}

export function ResumeAgent() {
  const [state, formAction] = useActionState(askResumeAgent, initialState);

  return (
    <section id="ai-agent">
      <Card className="bg-secondary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-accent/50 bg-background p-2">
                <Bot className="h-6 w-6 text-accent" />
            </div>
            <div>
              <CardTitle className="font-headline text-2xl tracking-tight">AI Resume Agent</CardTitle>
              <CardDescription>Your personal guide to my qualifications.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <div className="mb-4 rounded-lg border bg-background p-4 min-h-[6rem] flex items-center">
                <p className="text-sm text-muted-foreground">{state?.answer}</p>
            </div>
            {state?.message && <p className="mb-2 text-sm text-destructive">{state.message}</p>}
            <form action={formAction} className="flex w-full items-center space-x-2">
                <Input
                id="query"
                name="query"
                type="text"
                placeholder="e.g., What is his cloud experience?"
                required
                />
                <SubmitButton />
            </form>
        </CardContent>
      </Card>
    </section>
  );
}
