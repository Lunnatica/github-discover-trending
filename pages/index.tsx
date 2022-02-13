import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Github Trending Discovery</title>
            </Head>
            <Header />
        </>
    );
};

export default Home;
