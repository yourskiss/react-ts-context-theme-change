import { useLocation } from 'react-router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './../assets/css/nprogress-custome.css';

const RouteChangeTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);

  return null;
};

export default RouteChangeTracker;
