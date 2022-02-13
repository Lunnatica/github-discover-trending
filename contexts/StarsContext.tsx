import React, { useContext, useEffect, useState } from 'react';
import { getCookieValue, setCookie } from '../utils/cookies';

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

const StarsContextProvider: React.FC = ({ children }) => {
    const [starredRepos, setStarredRepos] = useState<string[]>([]);

    useEffect(() => {
        setStarredRepos(getCookieValue('starredRepos')?.split('|') ?? []);
    }, []);

    const star = (id: number) => {
        const updatedStarredRepos = [...starredRepos, id.toString()];
        const newCookieValue = updatedStarredRepos.join('|');
        setCookie('starredRepos', newCookieValue);
        setStarredRepos(updatedStarredRepos);
    };

    const unstar = (id: number) => {
        const updatedStarredRepos = starredRepos.filter(
            (x) => x !== id.toString()
        );
        const newCookieValue = updatedStarredRepos.join('|');
        setCookie('starredRepos', newCookieValue);
        setStarredRepos(updatedStarredRepos);
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
