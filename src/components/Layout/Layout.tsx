

import { Suspense, ReactNode } from 'react';
import AppBar from '../AppBar/AppBar';

interface LayoutProps {
    children: ReactNode;
    onOpenRegister: () => void;
}


const Layout: React.FC<LayoutProps> = ({ children, onOpenRegister }: LayoutProps) => {
    return (
        <div>
            <AppBar onOpenRegister={onOpenRegister} />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default Layout