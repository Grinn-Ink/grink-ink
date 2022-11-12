import { createCookieSessionStorage, redirect } from 'solid-start';

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: 'gicbas',
        secure: true,
        secrets: [import.meta.env.SESSION_SECRET],
        sameSite: true,
        path: '/',
        // seconds * minutes * hours * days
        maxAge: 60 * 60 * 1,
        httpOnly: true
    }
});

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await sessionStorage.getSession();

    session.set('userId', userId);

    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    });
}

export async function destroyUserSession(request: Request) {
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));

    return redirect('/login', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    });
}

export function getUserSession(request: Request) {
    const cookieHeader = request.headers.get('Cookie');

    return sessionStorage.getSession(cookieHeader);
}
