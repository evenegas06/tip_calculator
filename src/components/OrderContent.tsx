import { formatCurrency } from "../helpers/indes";
import { OrderItem } from "../types";

type OrderContentProps = {
    order: OrderItem[];
};

const OrderContent = ({ order }: OrderContentProps) => {
    return (
        <div>
            <h2 className="text-4xl font-black">Consumo</h2>

            <article className="mt-10 space-y-3">
                {order.length === 0 ? (
                    <p className="text-center">La orden esta vacía</p>
                ) : (
                    order.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-5 border-gray-200 border-y"
                        >
                            <div>
                                <p className="text-lg">
                                    {`${item.name} - ${formatCurrency(item.price)}`}
                                </p>

                                <p className="flex items-center justify-between font-black">
                                    <span>
                                        Cantidad: {item.quantity}
                                    </span>

                                    <span>
                                        Subtotal: {formatCurrency(item.price * item.quantity)}
                                    </span>
                                </p>
                            </div>

                            <button className="font-black text-white bg-red-600 rounded-full size-8">
                                X
                            </button>
                        </div>
                    ))
                )}
            </article>
        </div>
    )
}
export default OrderContent;