import React, { useContext, useEffect, useState } from 'react';
import { deleteCookie, getCookieValue, setCookie } from '../utils/cookies';

type StarsContextType = {
    starredReposIds: string[];
    star: (id: number) => void;
    unstar: (id: number) => void;
};

const defaultContextValues = {
    starredReposIds: [],
    star: () => {},
    unstar: () => {},
};

const StarsContext =
    React.createContext<StarsContextType>(defaultContextValues);

const COOKIE_NAME = 'starredReposIds';

const StarsContextProvider: React.FC = ({ children }) => {
    const [starredReposIds, setStarredReposIds] = useState<string[]>([]);

    useEffect(() => {
        setStarredReposIds(getCookieValue(COOKIE_NAME)?.split('|') ?? []);
    }, []);

    const star = (id: number) => {
        const updatedStarredReposIds = [...starredReposIds, id.toString()];
        const newCookieValue = updatedStarredReposIds.join('|');
        setCookie(COOKIE_NAME, newCookieValue);
        setStarredReposIds(updatedStarredReposIds);
    };

    const unstar = (id: number) => {
        const updatedStarredReposIds = starredReposIds.filter(
            (x) => x !== id.toString()
        );
        setStarredReposIds(updatedStarredReposIds);
        if (updatedStarredReposIds.length === 0) {
            deleteCookie(COOKIE_NAME);
        } else {
            const newCookieValue = updatedStarredReposIds.join('|');
            setCookie(COOKIE_NAME, newCookieValue);
        }
    };

    return (
        <StarsContext.Provider
            value={{
                starredReposIds,
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
