import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import './App.css'
 
import { ToastContainer } from 'react-toastify';
import RouteChangeTracker from "./lib/NProgress";

import ThemeSelector from "./Context/ThemeSelector"
import { ThemeProvider } from "./Context/ThemeContext";
import "./assets/css/theme.css";


const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const ForgetPassword = lazy(() => import('./components/PasswordForget'));
const ResetPassword = lazy(() => import('./components/PasswordReset'));
const RegisterStudent = lazy(() => import('./components/RegisterStudent')); // import('./components/RegisterStudent-zod'));
const Help = lazy(() => import('./components/Help'));
const Thanks = lazy(() => import('./components/Thanks'));
const NotFound = lazy(() => import('./components/NotFound')); 

const Dashboard = lazy(() => import('./components/Dashboard'));
const Profiles = lazy(() => import('./components/Profile'));

import Logo from "./assets/images/logo.png";
import HelpSection from './utils/HelpButton';

const appName = import.meta.env.VITE_APP_NAME;
 

const App: React.FC = () => {
    return (<ThemeProvider>
      <Router>
      <RouteChangeTracker />
      <ThemeSelector />
      <main className="w-full max-w-6xl h-auto min-h-screen mx-auto px-3 py-5 sm:px-5 sm:py-10">
        <aside className="w-full mb-8 text-center">  
          <Link to="/" className='font-primary'>
            <img
              className="w-[7rem] xl:w-[9rem] mx-auto"
              src={Logo}
              alt={appName}
            />
          </Link>

          
        </aside> 
      
        <section className="relative w-full h-auto min-h-[calc(100vh-200px)] px-3 py-12 sm:py-10 sm:px-10 bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-xl flex justify-center items-stretch ">
            <Suspense fallback={<div className='w-full p-10 font-sans text-center font-bold text-text-red-primary text-3xl'>Loading...</div>}>
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/help" element={<Help />} />
                <Route path="/thanks" element={<Thanks />} />

                <Route path="/login" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/student-registation" element={<RegisterStudent />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profiles />} />
              </Routes>
            </Suspense>

            <HelpSection />
        </section>
      </main>     
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
    </ThemeProvider>)
}
export default App
