import Head from 'next/head' 

export default function App({ children }) {
    return (
        <Head>
            <title>Template</title>
            <link rel="icon" href="/logo.png" type="image/png" />
            { children }
        </Head>
    )
}