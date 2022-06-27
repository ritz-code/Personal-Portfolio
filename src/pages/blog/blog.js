import React, { useEffect, useState, useContext } from "react";
import BlogCard from "./blogCard";
import ThemeStyles from '../../helpers/themeStyles';
import { ThemeContext } from "../../App.js";

import '../../styles/scss/_blog.scss';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../../data/posts', false, /\.mdx$/)).sort();

/**
 * Retrieves an array from markdown files directory and recursively displays
 * them on blog front page in <BlogCard> module.
 */
function Blog() {
    const { darkTheme } = useContext(ThemeContext);

    useEffect(() => {
        getPosts();
    }, []);

    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));
        setPosts([...posts]);
    }

    return (
        <>
            <div style={ThemeStyles()} className="container blogContainer">
                            <h1>Blog.</h1>
                {posts.map((post) => {
                    return (
                        <>
                            <BlogCard key={post.title} post={post} />
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Blog;