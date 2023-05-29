// Libraries
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { Categories, PizzaBlock, SortPopup } from '../components';
import PizzasLoader from '../components/PizzasLoader';
// Redux components
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = [
	'Мясные',
	'Вегетарианские',
	'Гриль',
	'Острые',
	'Закрытые',
];

const sortItems = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
	const dispatch = useDispatch();
	const pizzas = useSelector(({ pizzas }) => pizzas.items);
	const cartPizzas = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filter }) => filter);

	useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [category, sortBy]);

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index));
	}, []);

	const onSelectSortType = useCallback(obj => {
		dispatch(setSortBy(obj));
	}, []);

	const handleAddPizzaToCart = obj => {
		dispatch(addPizzaToCart(obj));
	};

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					categories={categoryNames}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					items={sortItems}
					onClickSortType={onSelectSortType}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? pizzas.map((pizza, index) => (
							<PizzaBlock
								onClickAddPizza={handleAddPizzaToCart}
								key={`${pizza.id}_${index}`}
								addedPizzasCount={
									cartPizzas[pizza.id] && cartPizzas[pizza.id].items.length
								}
								{...pizza}
							/>
					  ))
					: [...Array(10)].map((_, index) => <PizzasLoader key={index} />)}
			</div>
		</div>
	);
};

export default Home;
