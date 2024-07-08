import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './components/mainLayout.js'
import './App.css';

const router = createBrowserRouter([
  {
  path: '/',
  element: <Main />,
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
