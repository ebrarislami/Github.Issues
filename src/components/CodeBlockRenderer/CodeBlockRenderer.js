import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlockRenderer = props => {
	const { value } = props;
	return <SyntaxHighlighter>{value}</SyntaxHighlighter>;
};

export default CodeBlockRenderer;
