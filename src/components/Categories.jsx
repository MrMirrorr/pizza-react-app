import PropTypes from 'prop-types';
import { memo } from 'react';

const Categories = memo(({ activeCategory, categories, onClickCategory }) => {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}
				>
					Все
				</li>
				{categories.map((name, index) => (
					<li
						key={`${name}_${index}`}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => onClickCategory(index)}
					>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	activeCategory: PropTypes.number,
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
	activeCategory: null,
	categories: [],
};

export default Categories;
