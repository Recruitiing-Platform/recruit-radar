"use client";

import { categoryData } from '@/data';
import { CategoryDataInterface } from '@/interfaces/HomepageInterface';
import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

type Props = {};

const CategoryComponent = (props: Props) => {
  return (
    <div className="px-4 lg:px-56 pb-20 lg:pb-40 text-center">
      <h1 className="text-headerThree font-recSemiBold lg:display-two pb-2">Browse Categories</h1>
      <p className="text-[#625B71] dark:text-recLightGrey 3xl:text-headerSix pb-12">
        Most popular categories of portal sorted by popularity
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-3 sm:gap-10 lg:gap-24 xl:gap-[60px] pb-[60px] 3xl:w-1/2 3xl:mx-auto">
        {categoryData.map((category: CategoryDataInterface, index: number) => (
          <motion.div whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }} key={index} className="flex flex-col gap-6 items-center">
            <div
              style={{ backgroundColor: category.backgroundColor }}
              className="w-fit rounded-full p-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path d={category.path} fill="#747474" />
              </svg>
            </div>
            <span className="text-textSmall lg:text-headerSix 3xl:text-headerFour font-recMedium text-[#1D1D1D] dark:text-recLightGrey">
              {category.textContent}
            </span>
          </motion.div>
        ))}
      </div>

      <Button
        variant="outline"
        className="text-recPrimary text-[20px] 3xl:text-headerFour font-recMedium w-72 h-16 hover:scale-105 transition transform duration-300"
      >
        More
      </Button>
    </div>
  );
};

export default CategoryComponent;
