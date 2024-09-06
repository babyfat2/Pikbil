export type IColor = {
    backgroundColor: string;
    primary: string;
    secondary: string;
    textSecondary: string;
    textPrimary: string;
};


type ColorPalettes = {
    light: IColor;
    dark: IColor;
}

const Colors: ColorPalettes = {
    dark: {
        backgroundColor: '#000',
        primary: '#A9B4CD',
        secondary: '#597FE0',
        textPrimary: '#FFFF',
        textSecondary: '#FFFF'
    },
    light: {
        backgroundColor: '#FFF',
        primary: '#192252',
        secondary: '#142D92',
        textPrimary: '#192252',
        textSecondary: '#606D93',
    },
};

export default Colors;