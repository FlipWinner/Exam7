
import './App.css';
import { useState } from 'react';
import Item from './components/Item/Item.tsx';

const App = () => {
	const [orders, setOrders] = useState([
		{ name: 'Hamburger', count: 0, price: 80 },
		{ name: 'Coffee', count: 0, price: 70 },
		{ name: 'Cheeseburger', count: 0, price: 90 },
		{ name: 'Fries', count: 0, price: 45 },
		{ name: 'Tea', count: 0, price: 50 },
		{ name: 'Cola', count: 0, price: 40 }
	]);
    
	const [total, setTotal] = useState(0);
    
	const addItem = (name: string) => {
		const newItem = orders.filter((item) => {
			item.count++;
			return item.name === name;
		});
		setOrders(newItem);
	};
    
	const calcPrice = (price: number) => {
        
	};
    
	return (
		<>
			<div className='App'>
				<div className='main-block-left'>
					<span>Add items:</span>
					<div className='items-container'>
						{orders.map((item) => (
							<Item key={item.name} name={item.name} price={item.price} functionOnClick={() => addItem(item.name)} />
						))}
					</div>
				</div>
                
                
				<div className='main-block-right'>
					<span>Order details: </span>
					<div className='orders-container'>
                        
					</div>
                    
					<div>
						<span>Total price:</span>
						<span>{}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
