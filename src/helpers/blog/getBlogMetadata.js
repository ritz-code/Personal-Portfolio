import parseMetadata from './parseMetaData';
import getMetadataIndices from './getMetadataIndices';


function getBlogMetadata({ post }) {
    let blogMetadata = {};

    const lines = post.split("\n");
    const metaDataIndices = lines.reduce(getMetadataIndices, []);
    const metadata = parseMetadata({ lines, metaDataIndices });

    const date = new Date(metadata.publishedOn);
    const timestamp = date.getTime() / 1000;

    if (metadata) {
        blogMetadata = {
            id: timestamp,
            title: metadata.title ? metadata.title : "No title given",
            description: metadata.description ? metadata.description : "---",
            publishedOn: metadata.publishedOn ? metadata.publishedOn : "---",
            slug: metadata.slug ? metadata.slug : "---",
            author: metadata.author
        }
    }
    return blogMetadata;
}


export default getBlogMetadata;