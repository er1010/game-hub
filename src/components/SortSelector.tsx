import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuary } from "../App";

interface Props {
  onSelectOrder: (order: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
