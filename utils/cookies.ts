const getCookieValue = (cookieName: string) => {
    const cookies = document.cookie.split('; ');
    const cookieEntry = cookies.find((row) => row.startsWith(cookieName));
    if (cookieEntry) return cookieEntry.split('=')[1];
    else return null;
};

const setCookie = (cookieName: string, cookieValue: string) => {
    var d = new Date();
    d.setTime(d.getTime() + 15 * 60 * 1000); // 15 minutes
    var expires = 'Expires=' + d.toUTCString();
    document.cookie =
        cookieName + '=' + cookieValue + ';' + expires + ';Path=/;';
};

const deleteCookie = (name: string) => {
    document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export { getCookieValue, setCookie, deleteCookie };
