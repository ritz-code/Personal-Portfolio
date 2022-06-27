const parseContent = ({ lines, metaDataIndices }) => {
    if (metaDataIndices.length > 0) {
        lines = lines.slice(metaDataIndices[1] + 1, lines.length);
    }
    return lines.join("\n");
}

export default parseContent;