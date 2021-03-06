import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Head from 'next/head';

import { Header } from '../components/Header';
import { ResultsLayout } from '../components/ResultsLayout';
import { StarsContextProvider } from '../contexts/StarsContext';
import { GithubResult } from '../interfaces/GithubResults';

const Home = ({
    errorCode,
    results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
    <>
        <Head>
            <title>Github Trending Discovery</title>
        </Head>
        <StarsContextProvider>
            <Header />
            {errorCode ? (
                <Error
                    title="There was a problem when retrieving results from Github. Please try again later."
                    statusCode={errorCode}
                />
            ) : (
                <ResultsLayout results={results} />
            )}
        </StarsContextProvider>
    </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0];
        const url = `https://api.github.com/search/repositories?q=created:>${sevenDaysAgo}&sort=stars&order=desc`;
        const response = await fetch(url);

        const errorCode = !response.ok ? response.status : null;
        if (errorCode && context.res) context.res.statusCode = errorCode;
        const results = await response.json();

        const processedResults = results?.items?.map(
            ({
                id,
                full_name,
                description,
                stargazers_count,
                html_url,
                language,
                created_at,
            }: GithubResult) => ({
                id,
                full_name,
                description,
                stargazers_count,
                html_url,
                language,
                created_at,
            })
        );

        if (errorCode) {
            return {
                props: { errorCode, results: processedResults },
            };
        } else {
            return {
                props: { results: processedResults },
            };
        }
    } catch (error: any) {
        console.error('Error when retrieving the results: ', error.message);
        return {
            props: { errorCode: 500 },
        };
    }
};

export default Home;
