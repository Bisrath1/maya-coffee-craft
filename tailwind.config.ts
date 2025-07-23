
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '30 31% 38%', // #80623f
					foreground: '0 0% 100%'
				},
				secondary: {
					DEFAULT: '80 20% 49%', // #9ca87e
					foreground: '0 0% 100%'
				},
				accent: {
					DEFAULT: '30 33% 93%', // #f5f3f0
					foreground: '30 31% 38%'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '30 33% 96%', // #f9f7f4
					foreground: '30 20% 30%'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				coffee: {
					bean: '30 31% 38%', // #80623f
					roasted: '30 31% 22%', // #5d4a35
					light: '30 31% 50%', // #a67c52
					cream: '30 33% 93%' // #f5f3f0
				},
				earth: {
					green: '80 20% 49%', // #9ca87e
					sage: '80 20% 40%', // #7a8465
					light: '80 20% 60%' // #b8c299
				},
				rating: {
					star: '45 69% 56%' // #c9a856 - muted golden yellow for non-interactive stars only
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'monospace']
			},
			fontSize: {
				'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '300' }],
				'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'parallax': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'100%': {
						transform: 'translateY(-50px)'
					}
				},
				'pour-beans': {
					'0%': {
						transform: 'translateY(-20px) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateY(0px) rotate(180deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(20px) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'parallax': 'parallax 10s ease-in-out infinite alternate',
				'pour-beans': 'pour-beans 3s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-beans': "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=1920&h=1080&fit=crop')",
				'coffee-texture': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%23f5f3f0\" opacity=\"0.3\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23f5f3f0\" opacity=\"0.3\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"%23f5f3f0\" opacity=\"0.2\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
