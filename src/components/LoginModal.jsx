import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGoogle, FaGithub } from 'react-icons/fa';

const useStyles = createUseStyles((theme) => ({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 10, 20, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: theme.spacing.md,
    },
    modal: {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        borderRadius: '12px',
        border: `1px solid ${theme.colors.primary}`,
        boxShadow: `0 0 50px ${theme.colors.glass}`,
        padding: theme.spacing.xl,
        position: 'relative',
        overflow: 'hidden',
    },
    closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        color: theme.colors.textMethods,
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: theme.transitions.default,
        '&:hover': {
            color: theme.colors.primary,
            transform: 'rotate(90deg)',
        },
    },
    title: {
        fontSize: theme.typography.size.lg,
        color: theme.colors.text,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
    },
    subtitle: {
        color: theme.colors.textMethods,
        textAlign: 'center',
        marginBottom: theme.spacing.lg,
        fontSize: theme.typography.size.sm,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
    },
    input: {
        padding: '0.8rem 1rem',
        borderRadius: '6px',
        border: `1px solid ${theme.colors.textMethods}`,
        backgroundColor: 'rgba(5, 10, 20, 0.6)',
        color: theme.colors.text,
        fontSize: '1rem',
        fontFamily: theme.typography.fontFamily,
        transition: theme.transitions.default,
        '&:focus': {
            outline: 'none',
            border: `1px solid ${theme.colors.primary}`,
            boxShadow: `0 0 10px ${theme.colors.glass}`,
        },
    },
    submitBtn: {
        padding: '0.8rem',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: theme.spacing.sm,
        transition: theme.transitions.default,
        '&:hover': {
            boxShadow: `0 0 20px ${theme.colors.primary}`,
            transform: 'translateY(-2px)',
        },
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        margin: `${theme.spacing.md} 0`,
        color: theme.colors.textMethods,
        fontSize: theme.typography.size.sm,
        '&::before, &::after': {
            content: '""',
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '& span': {
            padding: '0 10px',
        },
    },
    socialLogin: {
        display: 'flex',
        gap: theme.spacing.sm,
    },
    socialBtn: {
        flex: 1,
        padding: '0.6rem',
        borderRadius: '6px',
        border: `1px solid ${theme.colors.textMethods}`,
        backgroundColor: 'transparent',
        color: theme.colors.text,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: theme.transitions.default,
        '&:hover': {
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            backgroundColor: 'rgba(100, 255, 218, 0.05)',
        },
    },
}));

const LoginModal = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={classes.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={classes.modal}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={classes.closeBtn} onClick={onClose}>
                        <FaTimes />
                    </button>

                    <h2 className={classes.title}>Welcome Back</h2>
                    <p className={classes.subtitle}>Sign in to access your dashboard</p>

                    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email" className={classes.input} />
                        <input type="password" placeholder="Password" className={classes.input} />
                        <button type="submit" className={classes.submitBtn}>Sign In</button>
                    </form>

                    <div className={classes.divider}>
                        <span>or continue with</span>
                    </div>

                    <div className={classes.socialLogin}>
                        <button className={classes.socialBtn}>
                            <FaGoogle /> Google
                        </button>
                        <button className={classes.socialBtn}>
                            <FaGithub /> GitHub
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LoginModal;
