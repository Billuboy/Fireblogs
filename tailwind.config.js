module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        100: '#eeeeee',
        200: '#dddddd',
      },
      blue: {
        100: '#EBF8FF',
      },
      orange: {
        100: '#FFCF7F',
        200: '#FFA000',
        300: '#F57C00',
      },
      coral: {
        100: '#FFC4B2',
        200: '#FFB8B8',
      },
      yellow: {
        100: '#ffe9a9',
      },
      red: {
        danger: '#E53E3E',
      },
      white: {
        basic: '#ffffff',
      },
      black: '#000000',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
        48: '48px',
      },
      width: {
        body: '1438px',
        304: '304px',
        50: '50px',
        70: '70px',
        126: '126px',
        543: '543px',
        100: '100px',
        192: '192px',
        516: '516px',
        394: '394px',
        221: '221px',
        212: '212px',
        632: '632px',
        703: '703px',
        900: '900px',
        160: '160px',
        122: '122px',
        60: '60px',
        290: '290px',
        800: '800px',
        1120: '1120px',
        '60%': '60%',
      },
      height: {
        24: '24px',
        28: '28px',
        32: '32px',
        48: '48px',
        50: '50px',
        53: '53px',
        60: '60px',
        70: '70px',
        72: '72px',
        90: '90px',
        100: '100px',
        150: '150px',
        192: '192px',
        203: '203px',
        252: '252px',
        362: '362px',
        436: '436px',
        562: '562px',
        592: '592px',
      },
      lineHeight: {
        60: '60px',
      },
      letterSpacing: {
        hero: '0.105em',
      },
      borderRadius: {
        blog: '20px',
        10: '10px',
      },
      inset: {
        px: '1px',
        8: '8px',
        84: '84px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
