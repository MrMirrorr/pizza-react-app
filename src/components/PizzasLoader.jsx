import ContentLoader from 'react-content-loader';

const PizzasLoader = () => {
	return (
		<div className='pizza-block'>
			<ContentLoader
				speed={0.5}
				width={280}
				height={460}
				viewBox='0 0 280 460'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<circle cx='130' cy='130' r='130' />
				<rect x='0' y='280' rx='3' ry='3' width='280' height='25' />
				<rect x='0' y='319' rx='10' ry='10' width='280' height='85' />
				<rect x='0' y='421' rx='10' ry='10' width='90' height='30' />
				<rect x='119' y='415' rx='30' ry='30' width='155' height='40' />
			</ContentLoader>
		</div>
	);
};

export default PizzasLoader;
