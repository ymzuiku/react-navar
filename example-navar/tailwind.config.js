const makecss = (start, end, callback) => {
  let list = {};
  for (let i = start; i <= end; i++) {
    const v = callback(i);
    list[v[0]] = v[1];
  }
  return list;
};

const makeByObj = (obj, callback) => {
  let list = {};
  Object.keys(obj).forEach((k) => {
    const v = callback(obj[k], k);
    list[v[0]] = v[1];
  });
  return list;
};

const allVariants = ['responsive', 'active', 'hover', 'focus'];

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '16': '4rem',
  '17': '4.25rem',
  '18': '4.5rem',
  '19': '4.75rem',
  '20': '5rem',
  '21': '5.25rem',
  '22': '5.5rem',
  '23': '5.75rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '88': '22rem',
  '96': '24rem',
  'top-safe': 'var(--top-safe)',
  'bottom-safe': 'var(--bottom-safe)',
  'top-bar': 'var(--top-bar)',
  'top-max-bar': 'var(--top-max-bar)',
  'bottom-bar': 'var(--bottom-bar)',
};

const rate = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
  vw: '100vw',
  vh: '100vh',
};

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    spacing,
    backgroundColor: (theme) => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      xl: '1rem',
      '2xl': '2rem',
      full: '9999px',
    },
    borderWidth: {
      default: '0.07rem',
      '1': '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)',
      '2xl': '0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      
    },
    fontSize: {
      xxs: '0.64rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      ...makecss(1, 9, (v) => [v * 100, v * 100]),
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...rate,
    }),
    inset: {
      '0': '0',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      ...makecss(0, 99, (v) => [v, `0.${v}`]),
      1: 1,
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      ...makecss(0, 12, (v) => [v, v]),
    },
    padding: (theme) => theme('spacing'),
    stroke: {
      current: 'currentColor',
    },
    textColor: (theme) => theme('colors'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...rate,
    }),
    zIndex: {
      auto: 'auto',
      ...makecss(0, 100, (v) => [v, v]),
      ...makecss(0, 10, (v) => [v * 10, v * 10]),
      ...makecss(0, 10, (v) => [v * 100, v * 100]),
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: allVariants,
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: allVariants,
    borderRadius: allVariants,
    borderStyle: ['responsive'],
    borderWidth: allVariants,
    boxShadow: allVariants,
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: allVariants,
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: allVariants,
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: allVariants,
    order: ['responsive'],
    outline: allVariants,
    overflow: ['responsive'],
    padding: allVariants,
    pointerEvents: ['responsive'],
    position: allVariants,
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: allVariants,
    textDecoration: allVariants,
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    // transition: allVariants,
    // transform: allVariants,
  },
  corePlugins: {},
  plugins: [
    function({ addBase }) {
      addBase({
        body: {
          '--top-safe': '0px',
          '--top-bar': '3.3rem',
          '--top-max-bar': '5.2rem',
          '--botom-safe': '0px',
          '--bottom-bar': '3.3rem',
          position: 'relative',
          WebkitTapHighlightColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        },
        input: {
          backgroundColor: '#f3f3f3',
          outline: 'none !important',
          border: 'none',
          padding: '0px',
          margin: '0px',
          appearance: 'none',
        },
        div: {
          userSelect: 'none',
        },
        button: {
          WebkitAppearance: 'none',
          outline: 'none !important',
          userSelect: 'none',
          '&:active': {
            outline: 'none',
            WebkitAppearance: 'none',
            userSelect: 'none',
          },
          '&:hover': {
            outline: 'none',
            WebkitAppearance: 'none',
            userSelect: 'none',
          },
        },
      });
    },
    function({ addUtilities, addVariant, addBase, variants }) {
      const transition = {
        '.ease-in-0': {
          transition: `all 0 ease-in`,
        },
        '.ease-in-1': {
          transition: `all 0.1s ease-in`,
        },
        '.ease-in-2': {
          transition: `all 0.15s ease-in`,
        },
        '.ease-in-3': {
          transition: `all 0.2s ease-in`,
        },
        '.ease-in-4': {
          transition: `all 0.25s ease-in`,
        },
        '.ease-in-5': {
          transition: `all 0.3s ease-in`,
        },
        '.ease-in-6': {
          transition: `all 0.35s ease-in`,
        },
        '.ease-in-7': {
          transition: `all 0.4s ease-in`,
        },
        '.ease-in-8': {
          transition: `all 0.5s ease-in`,
        },
        '.ease-out-0': {
          transition: `all 0 ease-out`,
        },
        '.ease-out-1': {
          transition: `all 0.1s ease-out`,
        },
        '.ease-out-2': {
          transition: `all 0.15s ease-out`,
        },
        '.ease-out-3': {
          transition: `all 0.2s ease-out`,
        },
        '.ease-out-4': {
          transition: `all 0.25s ease-out`,
        },
        '.ease-out-5': {
          transition: `all 0.3s ease-out`,
        },
        '.ease-out-6': {
          transition: `all 0.35s ease-out`,
        },
        '.ease-out-7': {
          transition: `all 0.4s ease-out`,
        },
        '.ease-out-8': {
          transition: `all 0.5s ease-out`,
        },
      };

      addUtilities(transition, {
        variants: allVariants,
      });
    },
    function({ addUtilities, addVariant, addBase }) {
      const translate = {
        ...makeByObj({ ...spacing, rate }, (v, k) => [`.translate-x-${k}`, { transform: `translateX(${v})` }]),
        ...makeByObj({ ...spacing, rate }, (v, k) => [`.translate-y-${k}`, { transform: `transformX(${v})` }]),
        ...makecss(0, 100, (v) => [`.scale-${v}`, { transform: `scale(${v / 100}, ${v / 100})` }]),
        ...makecss(0, 7, (v) => [`.rotate-${v * 45}`, { transform: `rotate(${v}deg)` }]),
        '.rotate-360': {
          transform: 'rotate(359deg)',
        },
      };

      addUtilities(translate, {
        variants: allVariants,
      });
    },
  ],
};
