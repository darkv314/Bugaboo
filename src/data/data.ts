import { ILink } from "@/models/links";

export const navBarNoAuth: ILink[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/#about',
    },
    {
        name: 'Services',
        path: '/#services',
    },
    {
        name: 'Steps',
        path: '/#steps',
    },
    {
        name: 'Testimonials',
        path: '/#testimonials',
    },
    {
        name: 'Codes',
        path: '/#codes',
    },
];


export const navBarAuth: ILink[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Codes',
        path: '/shared-codes',
    },
    {
        name: 'My Codes',
        path: '/my-codes',
    },
];