module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#00FF41", // matrix-green
        "primary-hover": "#00CC34", // matrix-green-dark
        secondary: "#FF0040", // cyber-red
        "secondary-hover": "#CC0033", // cyber-red-dark
        accent: "#8A2BE2", // neon-purple
        "accent-hover": "#6A1B9A", // neon-purple-dark
        
        // Background Colors
        background: "#0A0A0A", // deep-black
        surface: "#1A1A1A", // charcoal
        
        // Text Colors
        "text-primary": "#FFFFFF", // pure-white
        "text-secondary": "#CCCCCC", // light-gray
        
        // Status Colors
        success: "#00FF88", // bright-green
        warning: "#FFAA00", // amber
        error: "#FF4444", // controlled-red
        
        // Border Color
        border: "rgba(255, 255, 255, 0.1)", // white-10
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float': 'float 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'matrix-rain': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        'glow-primary': '0 8px 32px rgba(0, 255, 65, 0.2)',
        'glow-secondary': '0 8px 32px rgba(255, 0, 64, 0.2)',
        'glow-accent': '0 8px 32px rgba(138, 43, 226, 0.2)',
        'cyber': '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)',
      },
      backdropBlur: {
        'cyber': '8px',
      },
      transitionTimingFunction: {
        'mechanical': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'mechanical': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}