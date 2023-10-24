import { useState } from 'react';

import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick';

import { OptionId } from './types';

export const useUISelect = (onOptionSelect: (id: OptionId) => void) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityToggle = () => setIsVisible((prev) => !prev);

  const handleOptionSelect = (optionId: OptionId) => () => {
    onOptionSelect(optionId);
    setIsVisible(false);
  };

  const containerRef = useOutsideClick(() => {
    setIsVisible(false);
  });

  return {
    containerRef,
    toggle: handleVisibilityToggle,
    isVisible,
    select: handleOptionSelect,
  };
};
