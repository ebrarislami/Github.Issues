import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = props => {
	const { value } = props;
	return <SyntaxHighlighter>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
