import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// import LandingPage from './pages/landing-page';
import RootLayout from './layouts/rootLayout';
import About from './landing-page/about';
import { ToastContainer } from "react-toastify";
import Contact from './landing-page/contact';
import Hero from './landing-page/hero';
import Services from './landing-page/services';
import Testimonials from './landing-page';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/hero',
          element: <Hero />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/testimonials',
          element: <Testimonials />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
