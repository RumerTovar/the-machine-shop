import { useState } from 'react';

export const useSideMenu = () => {
 const [isOpen, setIsOpen] = useState(false);

 return {
  isOpen,
  setIsOpen,
 };
};
