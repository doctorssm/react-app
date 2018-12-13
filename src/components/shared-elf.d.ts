import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'coral-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'coral-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'emerald-grid': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}