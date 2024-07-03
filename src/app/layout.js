import './globals.css';

export const metadata = {
  title: {
    default: 'Techshareskk',
    template: '%s Techshareskk'
  },
  description: 'Techshareskk tutorials',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        {children}
        </body>
    </html>
  )
}
