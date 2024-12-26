import { useState } from 'react';
import type { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

	/**
	 *  Add an item to the order.
	 */
	const addItem = (item: MenuItem) => {
		const item_exists = order.find((order_item) => order_item.id === item.id);

		if (item_exists) {
			const update_order = order.map((order_item) => {
				if (order_item.id === item.id) {
					return { ...order_item, quantity: order_item.quantity + 1 };
				}

				return order_item;
			});

			setOrder(update_order);
			return;
		}

		const new_item = { ...item, quantity: 1 };
		setOrder([...order, new_item]);
	};

	return {
        order,
		addItem,
	};
};
