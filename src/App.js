// Libraries
import { Route, Routes } from 'react-router-dom';
// Components
import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<div className='content'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
