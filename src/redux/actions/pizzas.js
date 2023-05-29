import axios from 'axios';

export const setLoaded = value => ({
	type: 'SET_LOADED',
	payload: value,
});

export const fetchPizzas = (category, sortBy) => dispatch => {
	dispatch(setLoaded(false));
	async function fetchData() {
		try {
			const { data } = await axios.get(
				`https://6468aacc60c8cb9a2caefc25.mockapi.io/items?${
					category !== null ? `category=${category}` : ''
				}&sortBy=${sortBy.type}&order=${sortBy.order}`
			);
			dispatch(setPizzas(data));
		} catch (error) {
			alert('не удалось получить данные с сервера');
			console.error(error);
		}
	}
	fetchData();
};

export const setPizzas = items => ({
	type: 'SET_PIZZAS',
	payload: items,
});
