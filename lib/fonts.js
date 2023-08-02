import localFont from 'next/font/local'

export const terminus = localFont({
    src: [
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-Regular.ttf',
            weight: '400',
            style: "normal"
        },
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-Italic.ttf',
            weight: '400',
            style: "italic"
        },
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-BoldItalic.ttf',
            weight: '700',
            style: 'italic'
        }
    ],
    variable: '--font-terminus'
})

export const nerdy = localFont({
    src: [
        {
            path: '../public/fonts/3270/3270NerdFont-Regular.ttf',
            weight: '400',
            style: "normal"
        },
        {
            path: '../public/fonts/3270/3270NerdFont-Condensed.ttf',
            weight: '700',
            style: 'bold'
        }
    ],
    variable: '--font-nerdy'
})

export const dyslexic = localFont({
    src: [
        {
            path: '../public/fonts/OpenDyslexic/OpenDyslexicNerdFont-Regular.otf',
            weight: '400',
            style: "normal"
        },
        {
            path: '../public/fonts/OpenDyslexic/OpenDyslexicNerdFont-Bold.otf',
            weight: '700',
            style: 'bold'
        }
    ],
    variable: '--font-dyslexic'
})
