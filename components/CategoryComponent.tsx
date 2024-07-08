import { categoryData } from '@/data';
import { CategoryDataInterface } from '@/interfaces/CategoryDataInterface';
import React from 'react';
import { Button } from './ui/button';

type Props = {};

const CategoryComponent = (props: Props) => {
  return (
    <div className='px-56 pb-40 text-center'>
      <h1 className='display-two pb-2'>Browse Categories</h1>
      <p className='text-[#625B71] dark:text-recLightGrey pb-12'>Most popular categories of portal sorted by popularity</p>

      <div className='grid grid-cols-4 gap-[60px] pb-[60px]'>
        {categoryData.map((category: CategoryDataInterface, index: number) => (
          <div key={index} className='flex flex-col gap-6 items-center'>
            <div style={{backgroundColor: category.backgroundColor}} className='w-fit rounded-full p-5'>
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
            <span className='text-headerSix font-recMedium text-[#1D1D1D] dark:text-recLightGrey'>{category.textContent}</span>
          </div>
        ))}
      </div>

      <Button variant='outline' className='text-recPrimary text-[20px] font-recMedium w-72 h-16 hover:scale-105 transition transform duration-300'>More</Button>
    </div>
  );
};

export default CategoryComponent;
