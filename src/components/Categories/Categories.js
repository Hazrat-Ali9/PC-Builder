import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div>
      <h2 className="text-center capitalize text-2xl font-semibold mb-10">
        Featured Categories
      </h2>
      <div className="flex items-center w-full max-w-screen-xl sm:mb-20 mb-16 gap-4  mx-auto overflow-x-auto hideScrollBar capitalize text-sm font-medium">
        <div>
          <AdjustmentsVerticalIcon className="w-6" />
        </div>
        {categories?.map((category, i) => (
          <div
            key={`category-${i}`}
            className={`py-2 px-6 bg-white text-center whitespace-nowrap rounded hover:bg-blue-light hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow `}
          >
            <Link href={`/categories/${category?.name}`}>{category?.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
