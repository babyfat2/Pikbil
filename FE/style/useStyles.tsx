import { StyleSheet, } from 'react-native';
import { IColor } from './color';
import { useMemo } from 'react';
import { useAppSelector } from 'redux/hooks.ts/hooks';

interface Styles<T extends StyleSheet.NamedStyles<T>> {
    colors: IColor;
    styles: T;
}

export default function <T extends StyleSheet.NamedStyles<T>>(
    createStyle: (colors: IColor) => T,
): Styles<T> {
    const colors = useAppSelector((state) => state.darkMode.color)

    return {
        colors: colors,
        styles: useMemo(() => createStyle(colors), [colors, createStyle]),
    };
}