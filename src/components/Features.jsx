import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaTint, FaSearch, FaChartLine, FaServer, FaBell } from 'react-icons/fa';

const useStyles = createUseStyles((theme) => ({
    features: {
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
        backgroundColor: theme.colors.backgroundLight,
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    sectionHeader: {
        textAlign: 'center',
        marginBottom: theme.spacing.xl,
    },
    title: {
        fontSize: theme.typography.size.xl,
        color: theme.colors.text,
        marginBottom: theme.spacing.sm,
    },
    subtitle: {
        color: theme.colors.textMethods,
        fontSize: theme.typography.size.md,
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: theme.spacing.md,
        marginBottom: theme.spacing.xl,
    },
    card: {
        backgroundColor: 'rgba(17, 34, 64, 0.5)',
        padding: theme.spacing.md,
        borderRadius: '8px',
        transition: theme.transitions.default,
        cursor: 'pointer',
        border: '1px solid transparent',
        '&:hover': {
            transform: 'translateY(-10px)',
            backgroundColor: 'rgba(17, 34, 64, 1)',
            border: `1px solid ${theme.colors.primary}`,
            '& $icon': {
                color: theme.colors.primary,
            }
        }
    },
    icon: {
        fontSize: '2.5rem',
        color: theme.colors.secondary,
        marginBottom: theme.spacing.sm,
        transition: theme.transitions.default,
    },
    cardTitle: {
        fontSize: theme.typography.size.md,
        color: theme.colors.text,
        marginBottom: theme.spacing.xs,
        fontWeight: 600,
    },
    cardText: {
        color: theme.colors.textMethods,
        fontSize: theme.typography.size.sm,
        lineHeight: 1.6,
    },
    solutionSection: {
        marginTop: theme.spacing.xl,
    }
}));

const problemsData = [
    { icon: FaExclamationTriangle, title: 'Delayed Detection', text: 'Manual sampling causes critical delays. Pollution spikes remain invisible in real-time, leading to irreversible damage.' },
    { icon: FaTint, title: 'Invisible Pollution', text: 'Sudden contamination events often go unnoticed until it’s too late, affecting aquatic life and biodiversity.' },
    { icon: FaSearch, title: 'Unidentified Sources', text: 'Without continuous data, pinpointing the exact source of pollution is nearly impossible, hindering accountability.' },
];

const solutionData = [
    { icon: FaServer, title: 'Multi-Sensor Array', text: 'Real-time monitoring of pH, Turbidity, TDS, and Temperature gives a complete picture of water health.' },
    { icon: FaChartLine, title: 'AI Anomaly Detection', text: 'Our machine learning models analyze patterns to detect abnormal pollution levels instantly.' },
    { icon: FaBell, title: 'Smart Alerts', text: 'Instant notifications to authorities and institutions when contamination parameters exceed safe limits.' },
];

const Features = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section id="features" className={classes.features}>
            <div className={classes.container}>

                {/* Problems Section */}
                <div className={classes.sectionHeader}>
                    <motion.p
                        className={classes.subtitle}
                        style={{ color: theme.colors.accent, fontWeight: 'bold', marginBottom: '1rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        THE PROBLEM
                    </motion.p>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Water Safety is Failing
                    </motion.h2>
                </div>

                <div className={classes.grid}>
                    {problemsData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <feature.icon className={classes.icon} style={{ color: theme.colors.accent }} />
                            <h3 className={classes.cardTitle}>{feature.title}</h3>
                            <p className={classes.cardText}>{feature.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Solution Section */}
                <div className={`${classes.sectionHeader} ${classes.solutionSection}`}>
                    <motion.p
                        className={classes.subtitle}
                        style={{ color: theme.colors.primary, fontWeight: 'bold', marginBottom: '1rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        OUR SOLUTION
                    </motion.p>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        End-to-End Environmental Intelligence
                    </motion.h2>
                </div>

                <div className={classes.grid}>
                    {solutionData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <feature.icon className={classes.icon} />
                            <h3 className={classes.cardTitle}>{feature.title}</h3>
                            <p className={classes.cardText}>{feature.text}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
