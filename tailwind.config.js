/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#FDFBF8',     /* 生成り色 (Ecru White) */
                'bg-secondary': '#F5F2EE',   /* 薄いグレージュ */
                'bg-tertiary': '#EBE8E1',    /* 少し濃いグレージュ */
                'text-primary': '#2C2825',   /* 墨色に近いダークグレー */
                'text-secondary': '#595550', /* 落ち着いたグレー */
                'text-light': '#8C8884',     /* 明るめのグレー */
                'accent-subtle': '#967D69',  /* 彩度を落としたブロンズ */
                'accent-grey': '#7D7873',    /* ウォームグレー */
                'border': '#E0DDD8',         /* 馴染みの良いボーダー色 */
                'border-light': '#F2EFEC',
            },
            fontFamily: {
                'en': ['"Cormorant Garamond"', 'serif'],
                'serif': ['"Noto Serif JP"', '"Yu Mincho"', '"游明朝"', '"Hiragino Mincho ProN"', '"MS PMincho"', 'serif'],
                'sans': ['"Noto Sans JP"', '"Meiryo UI"', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'sans-serif'],
            },
            fontSize: {
                '3xl': ['64px', { letterSpacing: '0.2em' }],
                '2xl': ['48px', { letterSpacing: '0.1em' }],
                'xl': ['36px', { letterSpacing: '0.1em' }],
                'lg': ['26px', { letterSpacing: '0.1em' }],
                'md': ['18px', { lineHeight: '2.0' }],
                'base': ['16px', { lineHeight: '2.0' }],
                'sm': ['14px', { lineHeight: '1.8' }],
                'xs': ['12px', { lineHeight: '1.8' }],
            },
            letterSpacing: {
                'tight': '0.02em',
                'normal': '0.08em',
                'wide': '0.15em',
                'wider': '0.25em',
                'heading': '0.1em',
                'heading-large': '0.2em',
                'body': '0.05em',
            },
            spacing: {
                'section': '96px',
                'section-lg': '128px',
                'container': '32px',
                'container-lg': '48px',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.05)' },
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'slow-zoom': 'slowZoom 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
}
