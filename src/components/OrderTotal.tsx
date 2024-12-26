import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalProps = {
	order: OrderItem[];
};

const OrderTotal = ({ order }: OrderTotalProps) => {
    /**
     * 
     */
    const subtotal = useMemo(() => {
        return order.reduce((carry, item) => {
            return carry + (item.quantity * item.price);
        }, 0);
    }, [order]);

	return (
		<>
			<article className="space-y-3">
				<h2 className="text-2xl font-black">Totales y Propinas</h2>

				<p>
					Subtotal a pagar: &nbsp;
					<span className="font-bold">
                        {formatCurrency(subtotal)}
                    </span>
				</p>

				<p>
					Propina: &nbsp;
					<span className="font-bold">$ 0</span>
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
