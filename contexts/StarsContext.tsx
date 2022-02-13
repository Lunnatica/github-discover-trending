import React, { useContext, useEffect, useState } from 'react';
import { deleteCookie, getCookieValue, setCookie } from '../utils/cookies';

type StarsContextType = {
    starredRepos: string[] | null;
    star: (id: number) => void;
    unstar: (id: number) => void;
};

const defaultContextValues = {
    starredRepos: [],
    star: () => {},
    unstar: () => {},
};

const StarsContext =
    React.createContext<StarsContextType>(defaultContextValues);

const COOKIE_NAME = 'starredRepos';

const StarsContextProvider: React.FC = ({ children }) => {
    const [starredRepos, setStarredRepos] = useState<string[]>([]);

    useEffect(() => {
        setStarredRepos(getCookieValue(COOKIE_NAME)?.split('|') ?? []);
    }, []);

    const star = (id: number) => {
        const updatedStarredRepos = [...starredRepos, id.toString()];
        const newCookieValue = updatedStarredRepos.join('|');
        setCookie(COOKIE_NAME, newCookieValue);
        setStarredRepos(updatedStarredRepos);
    };

    const unstar = (id: number) => {
        const updatedStarredRepos = starredRepos.filter(
            (x) => x !== id.toString()
        );
        setStarredRepos(updatedStarredRepos);
        if (updatedStarredRepos.length === 0) {
            deleteCookie(COOKIE_NAME);
        } else {
            const newCookieValue = updatedStarredRepos.join('|');
            setCookie(COOKIE_NAME, newCookieValue);
        }
    };

    return (
        <StarsContext.Provider
            value={{
                starredRepos,
                star,
                unstar,
            }}
        >
            {children}
        </StarsContext.Provider>
    );
};

const useStarsContext = () => useContext(StarsContext);

export { StarsContextProvider, useStarsContext };
