import parseContent from './parseContent';
import getMetadataIndices from './getMetadataIndices';

const getBlogContent = ({ post }) => {
    const lines = post.split("\n");
    const metaDataIndices = lines.reduce(getMetadataIndices, []);
    const blogContent = parseContent({ lines, metaDataIndices });
    return blogContent;
}


export default getBlogContent;