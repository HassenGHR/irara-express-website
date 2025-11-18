export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  howItWorks: '/how-it-works',
  drivers: '/drivers',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof routes;