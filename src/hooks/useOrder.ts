import { useState } from 'react';
import type { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

	/**
	 *  Add an item to the order.
	 */
	const addItem = (item: MenuItem) => {
		// const new_item = structuredClone(item);
		// new_item.quantity = 1;

		const new_item = { ...item, quantity: 1 };
		setOrder([...order, new_item]);
	};

    console.log(order);

	return {
		addItem,
	};
};
