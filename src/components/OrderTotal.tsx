import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalProps = {
	order: OrderItem[];
	tip: number;
};

const OrderTotal = ({ order, tip }: OrderTotalProps) => {
	/**
	 * Calculate the subtotal of the order.
	 */
	const subtotal = useMemo(() => {
		return order.reduce((carry, item) => {
			return carry + (item.quantity * item.price);
		}, 0);
	}, [order]);

	/**
	 * Calculate the tip amount.
	 */
	const tip_amount = useMemo(() => {
		return subtotal * tip;
	}, [tip, order]); 

	return (
		<>
			<article className="">
				<h2 className="text-2xl font-black">Totales y Propinas</h2>

				<p>
					Subtotal a pagar: &nbsp;
					<span className="font-bold">{formatCurrency(subtotal)}</span>
				</p>

				<p>
					Propina: &nbsp;
					<span className="font-bold">{formatCurrency(tip_amount)}</span>
				</p>

				<p>
					Total a pagar: &nbsp;
					<span className="font-bold">$ 0</span>
				</p>
			</article>
		</>
	);
};
export default OrderTotal;
