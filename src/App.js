import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './components/mainLayout.js'
import ProductPage from './components/productPage.js'
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/productPage/:productId',
    element: <ProductPage />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
