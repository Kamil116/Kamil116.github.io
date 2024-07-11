import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
            <div className={inter.className} style={{ margin: 0 }}>
                <Header />
                {children}
                <Footer />
            </div>
    )
}
