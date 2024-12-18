import React, { useState, useEffect } from "react";

const PostFetcher = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/wp-json/wp/v2/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "10px" }}>
            <h2>Latest Posts ( Demo Component)</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title.rendered}</strong>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostFetcher;
