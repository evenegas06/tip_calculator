import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem
};

const MenuItem = ({ item }: MenuItemProps) => {
    return (
        <li>
            <button
                className="flex justify-between w-full p-3 border-2 border-teal-400 hover:bg-teal-200"
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