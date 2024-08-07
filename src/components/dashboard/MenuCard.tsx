import { FaBullseye, FaHamburger, FaUtensils } from "react-icons/fa";
import MenuItem from "./Menu";

const items = [
  {
    label: "Goals",
    icon: FaBullseye,
    iconBgColor: "bg-red-600",
  },
  {
    label: "Popular Dishes",
    icon: FaHamburger,
    iconBgColor: "bg-blue-600",
  },
  {
    label: "Menus",
    icon: FaUtensils,
    iconBgColor: "bg-teal-600",
  },
];

const MenuCard = () => {
  return (
    <div className="bg-gray-900 mt-10 p-4 rounded-lg">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuCard;
