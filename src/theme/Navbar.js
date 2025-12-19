import React, { useState } from 'react';
import Navbar from '@theme-original/Navbar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { SearchOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import clsx from 'clsx';

export default function NavbarWrapper(props) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const { colorMode, setColorMode } = useColorMode();

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    if (!isHomePage) {
        return <Navbar {...props} />;
    }

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -120 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: '1.5rem',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: '95%',
                maxWidth: '1200px',
                zIndex: 1000,
                pointerEvents: 'auto',
            }}
        >
            <div className="navbar-basuite-pill" style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                padding: '0.75rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/img/logo.png"
                        alt="BASUIT Logo"
                        style={{ height: '55px', width: 'auto' }}
                    />
                </Link>

                {/* Actions */}
                <div className="navbar-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} style={{ cursor: 'pointer' }}>
                        {colorMode === 'dark' ?
                            <SunOutlined style={{ fontSize: '1.25rem', color: 'white' }} /> :
                            <MoonOutlined style={{ fontSize: '1.25rem', color: 'white' }} />
                        }
                    </div>
                    <Link
                        to="https://github.com/BasitAyaz?tab=repositories"
                        style={{
                            width: '35px',
                            height: '35px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: '2px solid rgba(56, 189, 248, 0.5)',
                            padding: '0'
                        }}
                    >
                        <img
                            src="/img/profile.png"
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Link>
                </div>
            </div>

            {/* Hidden Original Navbar for Docusaurus functional requirements */}
            <div style={{ display: 'none' }}>
                <Navbar {...props} />
            </div>
        </motion.nav>
    );
}
