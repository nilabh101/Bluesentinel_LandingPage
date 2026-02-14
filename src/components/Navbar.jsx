import React, { useState, useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion, useScroll, useTransform } from 'framer-motion';

const useStyles = createUseStyles((theme) => ({
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${theme.spacing.lg}`,
        zIndex: 1000,
        transition: theme.transitions.default,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(5, 10, 20, 0.5)', // Transparent dark
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    scrolled: {
        backgroundColor: 'rgba(5, 10, 20, 0.9)',
        boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    },
    logo: {
        fontFamily: theme.typography.heading,
        fontSize: theme.typography.size.md,
        fontWeight: 700,
        color: theme.colors.primary,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    navLinks: {
        display: 'flex',
        gap: theme.spacing.md,
        listStyle: 'none',
        '@media (max-width: 768px)': {
            display: 'none', // Mobile menu to be implemented if needed
        },
    },
    link: {
        color: theme.colors.textMethods,
        textDecoration: 'none',
        fontSize: theme.typography.size.sm,
        fontWeight: 500,
        transition: theme.transitions.default,
        '&:hover': {
            color: theme.colors.primary,
            transform: 'translateY(-2px)',
        },
    },
    ctaConnect: {
        padding: '0.7rem 1.5rem',
        borderRadius: '4px',
        border: `1px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: theme.transitions.default,
        fontSize: theme.typography.size.sm,
        '&:hover': {
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            transform: 'translateY(-2px)',
        },
    },
}));

const Navbar = ({ onLoginClick }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = ['Features', 'Team', 'About', 'Contact'];

    return (
        <motion.nav
            className={`${classes.navbar} ${scrolled ? classes.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <a href="#" className={classes.logo}>
                BLUE SENTINEL
            </a>
            <ul className={classes.navLinks}>
                {links.map((link, index) => (
                    <motion.li
                        key={link}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                        <a href={`#${link.toLowerCase()}`} className={classes.link}>
                            {link}
                        </a>
                    </motion.li>
                ))}
            </ul>
            <motion.button
                className={classes.ctaConnect}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onLoginClick}
            >
                Login
            </motion.button>
        </motion.nav>
    );
};

export default Navbar;
