import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem,
    addItem: () => void,
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <li>
            <button
                className="flex justify-between w-full p-3 border-2 border-teal-400 hover:bg-teal-200"
                onClick={() => addItem()}
            >
                <p>{item.name}</p>
                <p className="font-black">
                    $ {item.price}
                </p>
            </button>
        </li>
    )
}
export default MenuItem