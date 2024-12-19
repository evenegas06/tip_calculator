import { useState } from 'react';
import type { OrderItem } from '../types';

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

    /**
     *  Add an item to the order.
     */
	const addItem = () => {
		console.log('addItem');
	};

	return {
        addItem,
    };
};
