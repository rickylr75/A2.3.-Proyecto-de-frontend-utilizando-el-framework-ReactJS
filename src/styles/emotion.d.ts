import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            surface: string;
            text: string;
            textSecondary: string;
            error: string;
            success: string;
            border: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
        };
    }
}