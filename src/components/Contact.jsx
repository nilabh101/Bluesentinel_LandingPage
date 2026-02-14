import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion } from 'framer-motion';

const useStyles = createUseStyles((theme) => ({
    contact: {
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
        backgroundColor: theme.colors.background,
        position: 'relative',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: theme.typography.size.xl,
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
    },
    description: {
        color: theme.colors.textMethods,
        fontSize: theme.typography.size.md,
        maxWidth: '600px',
        marginBottom: theme.spacing.xl,
    },
    form: {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
    },
    input: {
        padding: '1rem',
        borderRadius: '4px',
        border: `1px solid ${theme.colors.textMethods}`,
        backgroundColor: 'rgba(10, 25, 47, 0.5)',
        color: theme.colors.text,
        fontSize: '1rem',
        fontFamily: theme.typography.fontFamily,
        transition: theme.transitions.default,
        '&:focus': {
            outline: 'none',
            border: `1px solid ${theme.colors.primary}`,
            boxShadow: `0 0 10px ${theme.colors.glass}`,
        }
    },
    textarea: {
        padding: '1rem',
        borderRadius: '4px',
        border: `1px solid ${theme.colors.textMethods}`,
        backgroundColor: 'rgba(10, 25, 47, 0.5)',
        color: theme.colors.text,
        fontSize: '1rem',
        fontFamily: theme.typography.fontFamily,
        minHeight: '150px',
        resize: 'vertical',
        transition: theme.transitions.default,
        '&:focus': {
            outline: 'none',
            border: `1px solid ${theme.colors.primary}`,
            boxShadow: `0 0 10px ${theme.colors.glass}`,
        }
    },
    submitBtn: {
        marginTop: theme.spacing.sm,
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.colors.background,
        backgroundColor: theme.colors.primary,
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: theme.transitions.default,
        '&:hover': {
            backgroundColor: theme.colors.secondary,
            transform: 'translateY(-2px)',
        }
    }
}));

const Contact = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section id="contact" className={classes.contact}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className={classes.description}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Ready to secure your infrastructure? Contact our team for a personalized demo and security audit.
                </motion.p>

                <motion.form
                    className={classes.form}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <input type="text" placeholder="Name" className={classes.input} />
                    <input type="email" placeholder="Email" className={classes.input} />
                    <textarea placeholder="Message" className={classes.textarea} />
                    <button type="submit" className={classes.submitBtn}>Send Message</button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
