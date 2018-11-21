import Layout from '../src/client/components/MyLayout';
import Axios from 'axios';

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
)

Post.getInitialProps = async (context) => {
    const { id } = context.query;
    const response = await Axios.get(`https://api.tvmaze.com/shows/${id}`);
    const show = response.data;

    console.log(`Fetched show: ${show.name}`);
    return {
        show
    };
}

export default Post;