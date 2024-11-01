

import { Suspense, ReactNode } from 'react';
import AppBar from '../AppBar/AppBar';

interface LayoutProps {
    children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default Layout