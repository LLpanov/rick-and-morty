module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {

		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '400ms'
			},
			fontFamily: {
				rick: ['Inspiration', 'cursive']
			},
			keyframes: {
				flicker: {
					'0%': {
						'text-shadow': '0 0 4px #0000ff, 0 0 11px #0000ff, 0 0 19px #0000ff, 0 0 40px #0000ff, 0 0 80px #0000ff, 0 0 90px #0000ff, 0 0 100px #0000ff, 0 0 150px #0000ff'
					},
					'18%, 22%, 25%, 53%, 57%, 100%': {
						'text-shadow': '0 0 4px #00ff00, 0 0 11px #00ff00, 0 0 19px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00, 0 0 150px #00ff00'
					},
					'20%, 24%, 55%': {
						'text-shadow': 'none'
					}
				},
				neonGlow: {
					'0%': {
						'box-shadow': '0 0 0px #00ff00'
					},
					'50%': {
						'box-shadow': '0 0 10px #00ff00'
					},
					'100%': {
						'box-shadow': '0 0 0px #00ff00'
					}
				}
			},

			animation: {
				flicker: 'flicker 2s ease-in-out infinite alternate',
				neonGlow: 'neonGlow 2s ease-in-out infinite alternate'
			}
		}
	},

	plugins: []
};
