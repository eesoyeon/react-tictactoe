import { useState } from 'react';

export const useSort = (initialSort = 'ascending') => {
   const [sort, setSort] = useState(initialSort);

   const toggleSort = () => {
      setSort((toggle) =>
         toggle === 'ascending' ? 'descending' : 'ascending'
      );
   };

   return [sort, toggleSort];
};
