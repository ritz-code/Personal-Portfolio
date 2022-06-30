import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Markdown from 'markdown-to-jsx';
import getBlogMetadata from '../../helpers/blog/getBlogMetadata';
import getBlogContent from '../../helpers/blog/getBlogContent';
import ThemeStyles from '../../helpers/themeStyles';

import Loading from "../../components/loading";
import Code from './code';
import '../../styles/scss/_onePost.scss';

/*This function displays the single post page. The <Markdown> reads the <Code> tag
from the .mdx file and then overrides it with the <Code> tag from ./code.js.
The code.js file provides syntax-highlighting for code lines with the help of 
react-syntax-highlighter package.
*/
function OnePost(props) {
    const [post, setPost] = useState('');

    //get the slug from props
    let { slug } = useParams();

    let blogMetadata = {};
    let blogContent = "";

    useEffect(() => {
        const getPost = async () => {
            const res = await import(`../../data/posts/${slug}.mdx`);
            const resFetch = await fetch(res.default);
            const resText = await resFetch.text();
            setPost(resText);
        }
        getPost().catch(console.error);
    }, [slug]);

    if (post) {
        blogMetadata = getBlogMetadata({ post });
        blogContent = getBlogContent({ post });
    }

    return (
        <>
            {(post) ? <>
                <div style={ThemeStyles()} className="postContainer">
                    <div className='titleBkgnd'><h2>{blogMetadata.title}</h2></div>
                    <div className='postWrapper'>
                        <p>Published on {blogMetadata.publishedOn} by {blogMetadata.author}</p>
                        <hr />
                        <Markdown options={{
                            overrides: {
                                Code: {
                                    component: Code
                                }
                            }
                        }}>{blogContent}</Markdown>
                    </div>
                </div>
            </> : <Loading />
            }
        </>
    )
}

export default OnePost;  