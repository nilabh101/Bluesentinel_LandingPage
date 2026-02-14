import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    footer: {
        backgroundColor: theme.colors.background,
        padding: `${theme.spacing.lg} ${theme.spacing.lg}`,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        color: theme.colors.textMethods,
    },
    copy: {
        fontSize: theme.typography.size.sm,
        '& span': {
            color: theme.colors.primary,
        }
    }
}));

const Footer = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <footer className={classes.footer}>
            <p className={classes.copy}>
                &copy; {new Date().getFullYear()} <span>Blue Sentinel</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
