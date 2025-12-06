import React from 'react';
import Item from './Item/Item.tsx';

interface Props {
    orders: {name: string, count: number, price: number}[];
    functionOnClick: (name: string) => void;
}

const MainBlockRight: React.FC<Props> = ({ orders, functionOnClick }) => {
	return (
		<div className='main-block-right'>
			<span>Add items:</span>
			<div className='items-container'>
				{orders.map((item) => (
					<Item key={item.name} name={item.name} price={item.price} functionOnClick={() => functionOnClick(item.name)} />
				))}
			</div>
		</div>
	);
};

export default MainBlockRight;