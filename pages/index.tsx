import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Github trending discovery</title>
                <meta
                    name="description"
                    content="Application for discovering trending repositories on GitHub."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </>
    );
};

export default Home;
