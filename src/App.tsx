import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

function App() {

  const { addItem } = useOrder();

  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="grid py-20 mx-auto max-w-7xl md:grid-cols-2">
        <section className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <ul className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </ul>
        </section>

        <aside>
          <h2>Consumo</h2>
        </aside>
      </main>
    </>
  )
}

export default App
