import './App.css';
import { useState } from 'react';
import MainBlockRight from './components/MainBlockRight/MainBlockRight.tsx';
import MainBlockLeft from './components/MainBlockLeft/MainBlockLeft.tsx';

export const App = () => {
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
		const newItem = [...orders];
		newItem.filter((item) => {
			if(item.name === name) {
				item.count++;
				return item;
			}
		});
		setOrders(newItem);
		calcTotal();
	};

	const calcTotal = () => {
		const totalPrice = orders.reduce((acc, order) => {
			acc = acc + order.price * order.count;
			return acc;
		}, 0);
		setTotal(totalPrice);
	};

	const deleteOrder = (name: string) => {
		const newOrders = [...orders];
		newOrders.filter((item) => {
			if (item.name === name) {
				item.count = 0;
			}
			return item;
		});
		setOrders(newOrders);
		calcTotal();
	};
    
	return (
		<>
			<div className='App'>
				<MainBlockRight functionOnClick={addItem} orders={orders} />
                
				<MainBlockLeft functionOnClick={deleteOrder} orders={orders} total={total} />
			</div>
		</>
	);
};
