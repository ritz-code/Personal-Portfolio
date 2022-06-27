import React from 'react';
import { Link } from 'react-router-dom';

import getBlogMetadata from '../../helpers/blog/getBlogMetadata';
import '../../styles/scss/_blogCard.scss'


//individual card layout
function BlogCard(props) {
    const { post } = props;
    let blogMetadata = {};

    blogMetadata = getBlogMetadata({ post });

    const slug = blogMetadata.slug;

    return (
        <>
            <div className='blogCard'>
                <Link to={`/blog/${slug}`} className="blogCardLink">
                    <h2>{blogMetadata.title}</h2>
                    <div>Published on {blogMetadata.publishedOn} by {blogMetadata.author}</div>
                    <p>{blogMetadata.description}</p>
                </Link>
            </div>
        </>
    )

}

export default BlogCard;  