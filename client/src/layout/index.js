import React, { useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <Header openSidebar={() => setOpenSidebar(true)} />
            <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
            {children}
        </>
    );
}
