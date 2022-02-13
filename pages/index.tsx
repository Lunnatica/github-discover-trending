import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { ResultsLayout } from '../components/ResultsLayout';

const Home = ({
    errorCode,
    results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Github Trending Discovery</title>
            </Head>
            <Header />
            <ResultsLayout errorCode={errorCode} results={results?.items} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const url =
            'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc';
        const response = await fetch(url, {
            method: 'GET',
        });

        const errorCode = !response.ok ? response.status : null;
        if (errorCode && context.res) context.res.statusCode = errorCode;
        const results = await response.json();

        if (errorCode) {
            return {
                props: { errorCode, results },
            };
        } else {
            return {
                props: { results },
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
