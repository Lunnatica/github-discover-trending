import React, { useContext, useEffect, useState } from 'react';
import { getCookieValue, setCookie } from '../utils/cookies';

type StarsContextType = {
    starredRepos: string[] | null;
    star: (id: string) => void;
    unstar: (id: string) => void;
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

    const star = (id: string) => {
        const updatedStarredRepos = [...starredRepos, id];
        const currentCookieValue = getCookieValue('starredRepos');
        const newCookieValue = currentCookieValue
            ? currentCookieValue + '|' + id
            : id;
        setCookie('starredRepos', newCookieValue);
        setStarredRepos(updatedStarredRepos);
    };

    const unstar = (id: string) => {
        // TODO: delete from cookie
        setStarredRepos(starredRepos?.filter((x) => x !== id));
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
