
import Dashboardlayout from './components/dashboardlayout';
import Dashboard from './dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transactionpage from './transactions/Transactionpage';
import Support from './support/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <Transactionpage/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },Support
]);
function App() {
 
  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
