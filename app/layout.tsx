import './globals.css'

export const metadata = {
  title: 'Login | Quizlet',
  description: 'Login to your account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* The "children" here is where your page.tsx content will appear */}
        {children}
      </body>
    </html>
  )
}