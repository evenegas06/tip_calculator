import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import { MENU_ITEMS } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {
	const { order, addItem, removeItem } = useOrder();

	return (
		<>
			<header className="py-5 bg-teal-400">
				<h1 className="text-4xl font-black text-center">
					Calculadora de Propinas y Consumo
				</h1>
			</header>

			<main className="grid py-20 mx-auto space-x-5 max-w-7xl md:grid-cols-2">
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
					<OrderContent
						order={order}
						removeItem={removeItem}
					/>
				</section>
			</main>
		</>
	);
}

export default App;
