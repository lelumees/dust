import * as React from 'react';
import * as classes from './style.module.scss';

interface ButtonProps {
    label: string;
}

export const Button = ({ label }: ButtonProps) => {
    return <button className={classes.button}>{label}</button>;
};
