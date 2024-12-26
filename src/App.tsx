import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';
import TipForm from './components/TipForm';
import { MENU_ITEMS } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {
	const { order, addItem, removeItem, tip, setTip, resetOrder } = useOrder();

	return (
		<>
			<header className="py-5 bg-teal-400">
				<h1 className="text-4xl font-black text-center">
					Calculadora de Propinas y Consumo
				</h1>
			</header>

			<main className="grid px-5 py-10 mx-auto space-x-5 max-w-7xl md:grid-cols-2">
				<section className="p-5 border rounded-lg shadow-lg">
					<h2 className="text-4xl font-black">Menú</h2>

					<ul className="mt-10 space-y-3">
						{MENU_ITEMS.map((item) => (
							<MenuItem
								key={item.id}
								item={item}
								addItem={addItem}
							/>
						))}
					</ul>
				</section>

				<section className="p-5 space-y-10 border border-dashed rounded-lg shadow-lg border-slate-400">
					{order.length ? (
						<>
							<OrderContent
								order={order}
								removeItem={removeItem}
							/>

							<TipForm
								setTip={setTip}
								tip={tip}
							/>
						</>
					) : (
						<p className="text-center">La orden esta vacía</p>
					)}

					<OrderTotal
						order={order}
						tip={tip}
						resetOrder={resetOrder}
					/>
				</section>
			</main>
		</>
	);
}

export default App;
