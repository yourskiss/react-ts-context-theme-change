
 export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
        '3xl': "1920px"
    },
    extend: {
        spacing: {
            px: "1px",
            0: "0",
            1: "0.25rem",
            2: "0.45rem",
            3: "0.7rem",
            4: "0.95rem",
            5: "1.2rem",
            6: "1.45rem",
            8: "1.95rem",
            10: "2.5rem",
            12: "3rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
            40: "10rem",
            48: "12rem",
            56: "14rem",
            64: "16rem",
        },
        fontFamily: {
            'primary': ['LatinRegular', 'sans-serif'],
            'secondary': ['OpenSansRegular', 'sans-serif'],
            'online400': ['Roboto', 'sans-serif'],
            'sans': ['Open Sans', 'sans-serif'],
        },
        fontSize: {
            xs: "0.5rem",
            sm: "0.785rem",
            base: "0.8rem",
            tiny: "0.9rem",
            lil: "0.98rem",
            lg: "1.115rem",
            xl: "1.15rem",
            "2xl": "1.4rem",
            "3xl": "1.86rem",
            "4xl": "2.2rem",
        },
        fontWeight: {
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
        lineHeight: {
            tightest: '1',
            tighter: '1.25',
            tight: '1.5',
            snug: '1.75',
            normal: '2',
            relaxed: '2.25',
            loose: '2.5',
            veryLoose: '3',
        },
        colors: {
            'blue-primary': '#1b3867',
            'blue-secondary': '#0766ff',
            'blue-dark': '#033079',
            'blue-light': '#b8d3ff',

            'red-primary': '#e43955',
            'red-secondary': '#fff1f3',
            'red-dark': '#f9012a',
            'red-light': '#f5a2b0',

            'gray-primary': '#C6C6C6',
            'gray-secondary': '#F3F7FF',
            'gray-dark': '#C9C9C9',
            'gray-light': '#D9D9D9',

            'green-dark': '#00d543',
            'green-light': '#8ff9b1',

            'yellow-dark': '#ffd600',
            'yellow-light': '#fff1a9',

            'body':'#1F1F1F'
        },
        boxShadow: {
            popup: "0 4px 19px 0 rgba(131, 128, 160, 0.17)",
            base: "2px 0 15px 0 rgba(183, 183, 201, 0.09)",
            card: "0 7px 13px 0 rgba(183, 183, 201, 0.09)",
        },
        dropShadow: {
            glow: '0 0 8px rgba(255, 0, 0, 0.5)',
        },
        letterSpacing: {
            tighter: '-0.03em',
            widest: '0.25em',
        },
        aspectRatio: {
            square: [1, 1],
            video: [16, 9],
        },
        textShadow: {
            xs: '1px 1px 2px rgba(0,0,0,0.20)',
            sm: '2px 2px 4px rgba(0,0,0,0.30)',
            norml: '3px 3px 6px rgba(0,0,0,0.40)',
            md: '4px 4px 8px rgba(0,0,0,0.50)',
            lg: '5px 5px 10px rgba(0,0,0,0.60)',
            none: '0 0 0 rgba(0,0,0,0)',
        },
        transitionTimingFunction: {
            bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            swift: "cubic-bezier(0.4, 0, 0.2, 1)",
            inexpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            outback: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
        borderRadius: {
            'card': '20px',
            'xl-lg': '1.5rem',
        },
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
            modal: '1000',
        },
        opacity: {
            0: '0',
            20: '0.20',
            50: '0.50',
            75: '0.75',
            1: '1'
        }
        
    },
  },
  plugins: [],
};
