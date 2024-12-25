import { useState } from 'react';
import type { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

    /**
     *  Add an item to the order.
     */
	const addItem = (item: MenuItem) => {
		console.log(item);
	};

	return {
        addItem,
    };
};
