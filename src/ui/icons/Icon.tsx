import React, {ReactElement} from 'react';
import {Avatar} from '@mui/material';
import {
    InformationOutline
} from 'mdi-material-ui';
import './Icon.css';

export const ICONS = {
    Info: InformationOutline
} as const;

/**
 * Builds an avatar with an icon, whose name it receives as a parameter
 * @param props
 * @param props.name - icon name
 * @returns {ReactElement}
 */
export function Icon(props: {name: string}): ReactElement {
    const IconType = ICONS[props.name as keyof typeof ICONS];

    return (
        <Avatar className={`icon-avatar-wrapper ${props.name}`}>
            <IconType className="icon-avatar" />
        </Avatar>
    );
}
