import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const useStyles = createUseStyles((theme) => ({
    team: {
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
        backgroundColor: theme.colors.background,
        position: 'relative',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
    },
    title: {
        fontSize: theme.typography.size.xl,
        color: theme.colors.text,
        marginBottom: theme.spacing.xl,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: theme.spacing.md,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '12px',
        padding: theme.spacing.md,
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: theme.transitions.default,
        '&:hover': {
            transform: 'translateY(-5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${theme.colors.primary}`,
        }
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: theme.colors.backgroundLight,
        border: `2px solid ${theme.colors.primary}`,
        margin: '0 auto 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: theme.colors.textMethods,
    },
    name: {
        fontSize: theme.typography.size.md,
        color: theme.colors.text,
        fontWeight: 700,
        marginBottom: '0.2rem',
    },
    role: {
        fontSize: theme.typography.size.sm,
        color: theme.colors.primary,
        marginBottom: theme.spacing.sm,
        fontFamily: theme.typography.mono,
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: '0.8rem',
    },
    socialLink: {
        color: theme.colors.textMethods,
        fontSize: '1.2rem',
        transition: theme.transitions.default,
        '&:hover': {
            color: theme.colors.primary,
            transform: 'scale(1.1)',
        }
    }
}));

const teamMembers = [
    { name: 'Prabhnoor Singh', role: 'Frontend Developer', initial: 'P' },
    { name: 'Digbir Singh', role: 'Backend Developer', initial: 'D' },
    { name: 'Mehak Kaur', role: 'UI/UX & Presentation', initial: 'M' },
    { name: 'Nilabh Kalia', role: 'Database Engineer', initial: 'N' },
    { name: 'Prabhleen Kaur', role: 'Backend Developer', initial: 'P' },
];

const Team = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section id="team" className={classes.team}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The Team
                </motion.h2>

                <div className={classes.grid}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={classes.avatar}>{member.initial}</div>
                            <h3 className={classes.name}>{member.name}</h3>
                            <p className={classes.role}>{member.role}</p>
                            <div className={classes.socials}>
                                <a href="#" className={classes.socialLink}><FaLinkedin /></a>
                                <a href="#" className={classes.socialLink}><FaGithub /></a>
                                <a href="#" className={classes.socialLink}><FaTwitter /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
