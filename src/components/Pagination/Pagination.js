import React from 'react';
import { Pagination } from 'antd';
import './Pagination.css';

const AppPagination = props => {
	const pageSize = 25;

	const item = (current, type, originalElement) => {
		if (type === 'prev') {
			return <a>Previous</a>;
		}
		if (type === 'next') {
			return <a>Next</a>;
		}
		return originalElement;
	};

	return <Pagination pageSize={pageSize} total={10} itemRender={item} />;
};

export default AppPagination;
