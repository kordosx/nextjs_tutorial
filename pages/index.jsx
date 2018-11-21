import Layout from '../src/client/components/MyLayout';
import Link from 'next/link';
import axios from 'axios';

const Index = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows && props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async () => {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    const data = response.data;
    console.log("DATA: ", data);
    console.log(`Show data fetched/ Count: ${data.length}`);
    return {
        shows: data
    };
}

export default Index;