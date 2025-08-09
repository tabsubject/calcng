import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function PageLoader() {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // Show loader for 300ms
    
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-80 flex items-center justify-center z-50">
      <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="text-gray-600 font-medium">Loading...</span>
      </div>
    </div>
  );
}
