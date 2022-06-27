import { useContext } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ThemeContext } from '../../App';

/* Code module here overrides the <Code> tag in .mdx and provudes syntax highlighting for 
code block in mdx
*/
const Code = ({ children, language }) => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className="code">
            <SyntaxHighlighter
                language={language}
                style={darkTheme ? materialLight : materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code;