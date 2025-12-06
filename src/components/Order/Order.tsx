import * as React from 'react';

interface Props {
    name: string;
    count: number;
    price: number;
    functionOnClick: (name: string) => void;
}

const Order: React.FC<Props> = ({ name, price, count, functionOnClick }) => {
	return (
		<div className='order'>
			<h5>{name}</h5>
			<div className='order-info'>
				<span>x{count}</span>
				<span>{price * count}</span>
			</div>
			<button type='button' className='order-delete' onClick={() => functionOnClick(name)}>X</button>
		</div>
	);
};

export default Order;