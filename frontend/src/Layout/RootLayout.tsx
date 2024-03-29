import { FC, ReactNode } from 'react'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

type RootLayoutProps = {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout