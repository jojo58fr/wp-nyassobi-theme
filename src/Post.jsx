import { Component } from '@wordpress/element';

class Posts extends Component {
    state = {
        posts: [],
        isLoading: true,
        error: null,
    };
    componentDidMount() {
        fetch('http://127.0.0.1/wordpress_oop/wp-json/wp/v2/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(posts => this.setState({ posts, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { posts, isLoading, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                {posts.map(post => (
                    <article key={post.id}>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </article>
                ))}
            </div>
        );
    }
}
export default Posts;