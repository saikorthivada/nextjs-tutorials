export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Hai this is my header</h1>
        {children}
        </body>
    </html>
  )
}
