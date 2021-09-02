export const PRIVATE_ROUTES = [
    {
        path: '/login',
        component: Home,
        exact: true,
        name : "HOME"
    }
]

export const PRIVATE_ROUTES = {
    HOME : {
        path: '/login',
        component: Home,
        exact: true
    }
}

export const PUBLIC_ROUTES = [
    {
        path: '/register',
        component: Home,
        exact: true
    }
]
