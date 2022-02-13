import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { ResultsLayout } from '../components/ResultsLayout';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Github Trending Discovery</title>
            </Head>
            <Header />
            <ResultsLayout results={[]} />
        </>
    );
};

export default Home;
