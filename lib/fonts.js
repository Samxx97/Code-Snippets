import localFont from '@next/font/local'

export const terminus = localFont({
    src: [
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-Regular.ttf',
            weight: '400',
            style: "regular"

        },
        {
            path: '../public/fonts/Terminus/TerminessNerdFont-Bold.ttf',
            weight: '700',
            style: 'bold'

        }
    ],
    variable: '--font-terminus'
})

export const dyslexic = localFont({
    src: [
        {
            path: '../public/fonts/OpenDyslexic/OpenDyslexicNerdFont-Regular.otf',
            weight: '400',
            style: 'regular'

        },
        {
            path: '../public/fonts/OpenDyslexic/OpenDyslexicNerdFont-Bold.otf',
            weight: '700',
            style: 'bold'

        }
    ],
    variable: '--font-dyslexic'
})