import Click from '@/assets/images/icons/click.png'
import UselessBulb from '@/assets/images/icons/useless-bulb.png'
import Criticize from '@/assets/images/icons/criticize.png'

export const Menus = [
    // {
    //     name: 'Projects',
    //     href: '/projects',
    // },
    {
        name: 'Send',
        sub_heading : ['Fun'],
        sub_menu: [
            {
                name: 'A Love Ly Chase',
                description: 'A playful chase where love always wins.',
                href: '/send/love-ly-chase',
                icon: Click
            }
        ],
        grid_cols: 1,
        href: '',
    },
    {
        name: 'Learn',
        sub_heading : ['Quirky Knowledge'],
        sub_menu: [
            {
                name: 'Useless Facts',
                description: 'Get useless, but true facts',
                href: '/learn/useless-facts',
                icon: UselessBulb
            }
        ],
        grid_cols: 1,
        href: '',
    },
    {
        name: 'Explore',
        sub_heading : ['AI'],
        sub_menu: [
            {
                name: 'I-Vanish',
                description: 'The AI That’s Basically Ivan',
                href: '/explore/ivanish',
                icon: UselessBulb
            },
            {
                name: 'Profile Burner',
                description: 'Roast social profiles with AI humor!',
                href: '/explore/profile-burner',
                icon: Criticize
            }
        ],
        grid_cols: 1,
        href: '',
    },
]