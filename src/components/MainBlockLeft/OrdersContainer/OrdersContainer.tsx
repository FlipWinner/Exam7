import React from 'react';
import Order from './Order/Order.tsx';

interface Props {
    orders: {name: string, count: number, price: number}[];
    functionOnClick: (name: string) => void;
}

const OrdersContainer: React.FC<Props> = ({ orders, functionOnClick }) => {
	return (
		<div className='orders-container'>
			{orders.map((order) => {
				if (order.count !== 0) {
					return (
						<Order
							key={order.name}
							name={order.name}
							price={order.price}
							count={order.count}
							functionOnClick={() => functionOnClick(order.name)}
						/>
					);
				}
			})}
		</div>
	);
};

export default OrdersContainer;