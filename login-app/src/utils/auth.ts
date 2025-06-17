export const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate an API call for user authentication
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ username }));
        return true;
    }
    return false;
};

export const logout = (): void => {
    localStorage.removeItem('user');
};

export const isAuthenticated = (): boolean => {
    return localStorage.getItem('user') !== null;
};