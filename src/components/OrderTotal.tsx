import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalProps = {
	order: OrderItem[];
	tip: number;
	resetOrder: () => void;
};

const OrderTotal = ({ order, tip, resetOrder }: OrderTotalProps) => {
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

	/**
	 * Calculate the total.
	 */
	const total = useMemo(() => {
		return subtotal + tip_amount;
	}, [subtotal, tip_amount]);

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
					<span className="font-bold">{formatCurrency(total)}</span>
				</p>
			</article>

			<button 
				className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-25 disabled:cursor-not-allowed"
				disabled={total === 0}
				onClick={resetOrder}
			>
				Imprimir Ticket
			</button>
		</>
	);
};
export default OrderTotal;
