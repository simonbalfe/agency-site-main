import { LayoutContent } from '@shared/components/layout/layout-content'
import { PostHogProvider } from '@shared/components/providers/posthog-provider'
import { ThemeProvider } from '@shared/components/providers/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'
import '@/src/globals.css'

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'PulseAI | AI-Powered Instagram DM Automation & Social Analytics' },
      { name: 'description', content: 'Turn every Instagram comment into a customer. AI DM automation, UGC generation, and social analytics in one platform.' },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <PostHogProvider>
              <LayoutContent>
                <Outlet />
              </LayoutContent>
            </PostHogProvider>
          </ThemeProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
