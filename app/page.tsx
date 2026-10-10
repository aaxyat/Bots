import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="text-lg font-medium">Project ready!</h1>
          <p className="text-muted-foreground">
            Authentication powered by Clerk.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="default">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="outline">Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
