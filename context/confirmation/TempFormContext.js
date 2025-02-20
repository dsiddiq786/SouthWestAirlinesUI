import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useTempForm() {
  const [tempFormDetails, setTempFormDetails] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes('confirmation')) {
      setTempFormDetails({}); // Reset form details if not on confirmation page
    }
  }, [pathname]); // Runs when the route changes

  return {
    tempFormDetails,
    setTempFormDetails,
  };
}
