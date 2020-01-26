import React from 'react';
import { Pagination } from 'antd';
import './Pagination.css';

const AppPagination = props => {
	const pageSize = 25;
	const { issues, page, onChange } = props;
	const { total_count } = issues;
	const item = (current, type, originalElement) => {
		if (type === 'prev') {
			return <a>Previous</a>;
		}
		if (type === 'next') {
			return <a>Next</a>;
		}
		return originalElement;
	};

	return (
		<div className="Pagination">
			<Pagination current={+page} onChange={onChange} pageSize={pageSize} total={total_count} itemRender={item} />
		</div>
	);
};

export default AppPagination;
