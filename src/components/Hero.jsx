import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion } from 'framer-motion';

const useStyles = createUseStyles((theme) => ({
    hero: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.colors.background,
        overflow: 'hidden',
        position: 'relative',
        padding: `0 ${theme.spacing.lg}`,
    },
    backgroundGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // Using a complex gradient to simulate deep water since image gen failed
        background: `
      radial-gradient(circle at 50% 50%, rgba(10, 25, 47, 0.8) 0%, rgba(5, 10, 20, 1) 100%),
      linear-gradient(45deg, ${theme.colors.backgroundLight} 0%, transparent 100%),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 50px,
        rgba(100, 255, 218, 0.05) 50px,
        rgba(100, 255, 218, 0.05) 51px
      )
    `,
        zIndex: 0,
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '300vw',
            height: '300vw',
            top: '-150%',
            left: '-100%',
            background: 'radial-gradient(rgba(100, 255, 218, 0.1) 0%, transparent 60%)',
            animation: '$rotate 30s linear infinite',
            opacity: 0.5,
        }
    },
    '@keyframes rotate': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
    },
    content: {
        zIndex: 1,
        maxWidth: '1000px',
    },
    logoPlaceholder: {
        width: '120px',
        height: '120px',
        margin: '0 auto 2rem',
        borderRadius: '50%',
        border: `2px solid ${theme.colors.primary}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        color: theme.colors.primary,
        boxShadow: `0 0 50px ${theme.colors.glass}`,
        background: 'rgba(10, 25, 47, 0.4)',
        backdropFilter: 'blur(5px)',
    },
    preHeading: {
        color: theme.colors.primary,
        fontFamily: theme.typography.mono,
        marginBottom: theme.spacing.sm,
        fontSize: theme.typography.size.sm,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
    },
    heading: {
        fontSize: theme.typography.size.xxl,
        fontWeight: 800,
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
        lineHeight: 1.1,
        '& span': {
            background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        }
    },
    description: {
        fontSize: theme.typography.size.md,
        color: theme.colors.textMethods,
        maxWidth: '700px',
        margin: '0 auto 3rem',
        lineHeight: 1.6,
    },
    ctaContainer: {
        display: 'flex',
        gap: theme.spacing.md,
        justifyContent: 'center',
    },
    primaryBtn: {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.colors.background,
        backgroundColor: theme.colors.primary,
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: theme.transitions.default,
        '&:hover': {
            boxShadow: `0 0 20px ${theme.colors.primary}`,
            transform: 'translateY(-2px)',
        }
    },
    secondaryBtn: {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.colors.primary,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.primary}`,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: theme.transitions.default,
        '&:hover': {
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            transform: 'translateY(-2px)',
        }
    }
}));

const Hero = ({ onLoginClick }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section className={classes.hero}>
            <motion.div
                className={classes.backgroundGradient}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <div className={classes.content}>
                <motion.div
                    className={classes.logoPlaceholder}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <span role="img" aria-label="water">💧</span>
                </motion.div>

                <motion.p
                    className={classes.preHeading}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Environmental Intelligence
                </motion.p>

                <motion.h1
                    className={classes.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    AI Powered <br />
                    <span>Water Pollution Detector</span>
                </motion.h1>

                <motion.p
                    className={classes.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Rivers suffer from invisible pollution due to lack of continuous monitoring.
                    Blue Sentinel detects abnormal patterns instantly, protecting our ecosystems
                    and public health before it's too late.
                </motion.p>

                <motion.div
                    className={classes.ctaContainer}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <button className={classes.primaryBtn} onClick={onLoginClick}>Live Dashboard</button>
                    <button className={classes.secondaryBtn} onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>How It Works</button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
