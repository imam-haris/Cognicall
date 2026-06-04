"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { signOut } from "better-auth/api";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, BotIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const HomeView = ()=>{
  const router = useRouter();
  const trpc = useTRPC();
  const {data : session} = authClient.useSession();

  return (
    <div className="flex flex-col p-4 md:p-8 gap-y-8 max-w-5xl mx-auto w-full flex-1">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back{session?.user?.name ? `, ${session.user.name}` : ""}
        </h1>
        <p className="text-muted-foreground text-lg">
          What would you like to do today?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col hover:border-primary/50 transition-colors shadow-sm">
          <CardHeader>
            <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <CalendarIcon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl">Meetings</CardTitle>
            <CardDescription className="text-base">
              Schedule, view, and manage your upcoming and past meetings.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/meetings">
                Go to Meetings
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col hover:border-primary/50 transition-colors shadow-sm">
          <CardHeader>
            <div className="size-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
              <BotIcon className="size-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <CardTitle className="text-xl">AI Agents</CardTitle>
            <CardDescription className="text-base">
              Create and manage AI agents to assist you in your meetings.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4">
            <Button asChild variant="secondary" className="w-full" size="lg">
              <Link href="/agents">
                Manage Agents
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
