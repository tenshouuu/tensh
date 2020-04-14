import {
  ColorsEnum,
  FamiliesEnum,
  FontStyleType,
  MediaWidthsEnum,
  ShadowsType,
  TypographyType,
} from './theme';

import { convertCssRgba } from './tools';

export function getColorByName(
  colorName: keyof typeof ColorsEnum, opacity = 1,
): (props) => string {
  return (props) => {
    const { theme } = props;
    return colorName
      ? convertCssRgba(theme.colors[colorName], opacity)
      : convertCssRgba(theme.colors.white, opacity);
  };
}

export function getTypographyByName(
  typographyName: keyof TypographyType,
): (props) => FontStyleType {
  return (props) => {
    const { theme } = props;
    return theme.typography[typographyName] || '';
  };
}

export function getShadowByName(
  shadowName: keyof ShadowsType, opacity?: number,
): (props) => string {
  return (props) => {
    const { theme } = props;
    return theme.shadows[shadowName](opacity) || '';
  };
}

export function getMediaWidthByName(mediaName: keyof typeof MediaWidthsEnum): (props: any) => string {
  return (props) => {
    const { theme } = props;
    return `${theme.mediaWidths[mediaName] || 0}px`;
  };
}

export function getFamilyByName(familyName: keyof typeof FamiliesEnum): (props: any) => string {
  return (props) => {
    const { theme } = props;
    return theme.families[familyName] || '';
  };
}

export function createTypographyStyleByName(
  typographyName: keyof TypographyType,
): (props) => string {
  return (props) => {
    const {
      family,
      weight,
      size,
      spacing,
      lineHeight,
    } = getTypographyByName(typographyName)(props);
    return `
            font-family: ${family};
            font-weight: ${weight};
            font-size: ${size};
            letter-spacing: ${spacing};
            line-height: ${lineHeight};
        ` || '';
  };
}
