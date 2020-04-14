
export enum MediaWidthsEnum {
  desktop= 1440,
  minDesktop= 1280,
  tablet= 1024,
  minTablet= 700,
  mobile= 320,
}

export enum ColorsEnum {
  yellow= '#f5b500',
  orange= '#ff7c00',
  lightPink= '#ff6cab',
  pink= '#f95cde',
  lightPurple= '#8457f6',
  semiPurple= '#7651ff',
  purple= '#6f47d3',
  darkPurple= '#5f38bf',
  lightBlue= '#9cd7ff',
  semiBlue= '#673bff',
  darkBlue= '#363c5f',
  white= '#ffffff',
  lightGray= '#eef1f5',
  gray= '#e1e1f2',
  darkGray= '#9c98c1',
  lightGreen= '#00ce98',
  red= '#ff0407',
}

export enum FamiliesEnum {
  medium= 'RubikMedium, OpenSans, OpenSans-Bold',
  regular= 'RubikRegular, OpenSans, OpenSans-Regular',
  bold= 'RubikBold, OpenSans, OpenSans-Regular',
}

export interface FontStyleType {
  family: string;
  weight: number;
  size: string;
  spacing: string;
  lineHeight: string;
}

export interface TypographyType {
  header1: FontStyleType;
}

export const typography: TypographyType = {
  header1: {
    family: FamiliesEnum.medium,
    weight: 500,
    size: '2.75rem', // 44px
    spacing: 'normal',
    lineHeight: '3.25rem', // 52px
  },
};

export interface ShadowsType {
  depth1: ((opacity?: number) => string);
}

export const shadows = {
  depth1: (opacity = 0.25) => (`0px 2px 16px rgba(0, 0, 0, ${opacity})`),
};

export interface Tokens {
  families: FamiliesEnum;
  colors: ColorsEnum;
  typography: TypographyType;
  shadows: ShadowsType;
  mediaWidths: MediaWidthsEnum;
}

export const tokens = {
  families: FamiliesEnum,
  colors: ColorsEnum,
  typography,
  shadows,
  mediaWidths: MediaWidthsEnum,
};
