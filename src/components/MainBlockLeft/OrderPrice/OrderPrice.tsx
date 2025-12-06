import React from 'react';

interface Props {
    total: number
}

const OrderPrice: React.FC<Props> = ({ total }) => {
	return (
		<div className='order-price'>
			{total === 0
				? <span>No items to order yet!</span>
				: <><span>Total price: </span><span>{total}</span></>
			}
		</div>
	);
};

export default OrderPrice;