import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '280px',
        sml: '320px',
        smd: '425px',
        mdm: '370px',
        mdl: '600px',
        md: '768px',
        mdg: '900px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        '2xl': '1550px',
        '3xl': '2560px',
      },
    },
    colors: {
      recPrimary: '#FF595A',
      recSecondary: '#001233',
      recDark: '#000030',
      recBody: '#555562',
      recSubtle: '#808080',
      recLightGrey: '#F0F0F0',
      recAccent: '#F5F4FB',
      recLight: '#FFFFFF',
      recSuccess: '#04802E',
      recError: '#E81010',
      recWarning: '#DD900D'
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    fontSize: {
      textLarge: '4rem',
      headerOne: '3rem',
      headerTwo: '2.5rem',
      headerThree: '2rem',
      headerFour: '1.75rem',
      headerFive: '1.5rem',
      headerSix: '1.25rem',
      textBody: '1rem',
      textSmall: '14px',
    },
    fontWeight: {
      recBold: '700',
      recSemiBold: '600',
      recMedium: '500',
      recRegular: '400'
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config