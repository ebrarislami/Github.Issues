import React from 'react';
import './ImageRenderer.css';

const ImageRenderer = props => {
	return <img {...props} alt="markdown image" className="ImageRenderer" />;
};

export default ImageRenderer;
