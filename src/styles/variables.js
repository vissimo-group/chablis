const colors = {
  primary: {
    base: '#03a678',
    primary_20: '#088A66',
    primary_40: '#0D6F53',
    primary_60: '#125341',
  },

  secondary: {
    base: '#ce2a36',
    secondary_20: '#AA2731',
    secondary_40: '#87242C',
    secondary_60: '#632226',
  },

  tertiary: {
    base: '#FF9A22',
    tertiary_20: '#FFB966',
    tertiary_40: '#FFCA8C',
    tertiary_60: '#FFDCB3',
  },

  feedback: {
    info: '#2798E9',
    success: '#03CE61',
    warning: '#F5AA18',
    error: '#F45F5F',
  },

  neutrals: {
    neutral_100: '#1C1C1C',
    neutral_200: '#585757',
    neutral_300: '#969696',
    neutral_400: '#E7E7E7',
  },

  background: {
    primary: '#FFFFFF',
    secondary: '#F7F7F7',
  },

  standard: {
    orange_1: '#FFB55F',
    orange_2: '#F49A30',
    orange_3: '#F8892C',
    orange_4: '#EC720B',
    orange_5: '#C85F01',
    white: '#fff',
    lightest_grey: '#dcdcdc',
    light_grey: '#d3d3d3',
    medium_grey: '#c0c0c0',
    dark_grey: '#808080',
    darkest_grey: '#696969',
    darkest_grey_2: '#393939',
    black: '#20201e',
    default_black: '#000',
  },
};

const sizes = {
  DEFAULT: '16px',
  LARGE: '32px',
  HALF: '8px',
  RADIUS: '4px',
  FULL: '100%',
};

const breakpoints = {
  SMALL: '768px',
  NORMAL: '1024px',
  BIG: '1280px',
  LARGE: '1440px',
};

const fontSizes = {
  HUGE1: '48px',
  HUGE2: '36px',
  LARGE: '32px',
  BIG: '20px',
  NORMAL: '16px',
  SMALL: '14px',
  EXTRASMALL: '12px',
  TINY: '10px',
};

const fontWeights = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: '700',
};

export const zIndexes = {
  HELL: -1,
  GROUND: 1,
  SKY: 2,
  STRATOSPHERE: 3,
  MILKAWAY: 4,
  UNIVERSE: 5,
};

const fonts = {
  DEFAULT: 'Montserrat',
  BARLOW: 'Barlow Semi Condensed, sans-serif',
  PAYTONE: 'Paytone One, sans-serif', // TODO: Investigate issue with this font
};

export {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  sizes,
};
