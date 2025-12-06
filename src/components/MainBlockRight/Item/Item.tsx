import * as React from 'react';

interface Props {
    name: string;
    price: number;
    functionOnClick?: () => void;
}

const Item: React.FC<Props> = ({ name, price, functionOnClick }) => {
	return (
		<>
			<button onClick={functionOnClick} className='item'>
				<h5>{name}</h5>
				<span>Price: {price} KGS</span>
			</button>
		</>
	);
};

export default Item;