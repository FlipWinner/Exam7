import React from 'react';
import OrderPrice from './OrderPrice/OrderPrice.tsx';
import OrdersContainer from './OrdersContainer/OrdersContainer.tsx';

interface Props {
    total: number;
    orders: {name: string, count: number, price: number}[];
    functionOnClick: (name: string) => void;
}

const MainBlockLeft: React.FC<Props> = ({ total, orders, functionOnClick }) => {
	return (
		<div className='main-block-left'>
			<span>Order details: </span>

			<OrderPrice total={total} />
            
			<OrdersContainer orders={orders} functionOnClick={functionOnClick} />
		</div>
	);
};

export default MainBlockLeft;