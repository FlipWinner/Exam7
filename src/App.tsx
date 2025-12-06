
import './App.css';
import { useState } from 'react';
import Item from './components/Item/Item.tsx';
import Order from './components/Order/Order.tsx';

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
				<div className='main-block-right'>
					<span>Add items:</span>
					<div className='items-container'>
						{orders.map((item) => (
							<Item key={item.name} name={item.name} price={item.price} functionOnClick={() => addItem(item.name)} />
						))}
					</div>
				</div>
                
                
				<div className='main-block-left'>
					<span>Order details: </span>
					<div className='orders-container'>
						{orders.map((order) => {
							if (order.count !== 0) {
								return (
									<Order
										key={order.name}
										name={order.name}
										price={order.price}
										count={order.count}
										functionOnClick={() => deleteOrder(order.name)}
									/>
								);
							}
						})}
					</div>
                    
					<div>
						<span>Total price: </span>
						<span>{total}</span>
					</div>
				</div>
			</div>
		</>
	);
};
