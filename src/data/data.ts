export const navBarNoAuth: {
    name: string;
    path: string;
    button?: "primary" | "secondary"| "imageButton" | undefined;
    icon?: boolean;
}[] = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Services',
            path: '/services',
        },
        {
            name: 'Steps',
            path: '/steps',
        },
        {
            name: 'Testimonials',
            path: '/testimonials',
        },
        {
            name: 'Codes',
            path: '/codes',
        },
        {
            name: 'Login',
            path: '/login',
            button: "secondary"
        },
        {
            name: 'Join Now!',
            path: '/register',
            button: "imageButton",
            icon: true
        }
    ];