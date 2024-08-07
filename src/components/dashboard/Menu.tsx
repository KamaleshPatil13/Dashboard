import React from 'react';

type Item = {
  label: string;
  icon: React.ComponentType;
  iconBgColor: string;
};

type MenuItemProps = {
  item: Item;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 mb-2 rounded-lg my-6">
      <div className="flex items-center">
        <div className={`p-2 rounded-full ${item.iconBgColor}`}>
          {/* <Icon className="text-white" /> */}
        </div>
        <span className="ml-4 text-white">{item.label}</span>
      </div>
      <div>
        <button className="text-white bg-gray-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
