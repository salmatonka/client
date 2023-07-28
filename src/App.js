import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    // <div class='mx-auto md:max-w-[1240px]'>
    // <RouterProvider router={router}></RouterProvider>  
    // </div>
    <>
     <RouterProvider router={router}></RouterProvider>  
    </>
  );
}

export default App;
