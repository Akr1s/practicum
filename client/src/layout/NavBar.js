import React, { useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function NavBar() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <Header openSidebar={() => setOpenSidebar(true)} />
            <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
        </>
    );
}
