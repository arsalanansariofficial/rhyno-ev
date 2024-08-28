import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: '',
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        yellow: {
          100: '#F9ED32',
          200: '#FFF225'
        },
        black: {
          '100': '#252525',
          '200': '#202020',
          '300': '#131313',
          '500': '#334155'
        },
        white: {
          '100': '#FFFFFF',
          '200': '#EDEDED',
          '300': '#F2F2F2',
          '400': '#FAFAFA'
        },
        'dark-grey': {
          '100': '#424242',
          '200': '#2C2A2A',
          '300': '#3C3C3C',
          '400': '#414141',
          '500': '#373737'
        },
        violet: {
          100: '#dedddf',
          500: '#8e8593',
          900: '#21092f'
        },
        green: {
          500: '#8e8593b3',
          700: '#ff5252'
        },
        ring: 'hsl(var(--ring))',
        input: 'hsl(var(--input))',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          to: { height: '0' },
          from: { height: 'var(--radix-accordion-content-height)' }
        }
      },
      animation: {
        'accordion-up': 'accordion-up 0.2s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
