import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePages from './Components/HomePages';
import About from './Components/About';
import Error from './Components/Error';
import Root from './Components/Root';

function App() {
  
  const routes = createBrowserRouter([
   {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:'/', element:<HomePages/>},
      { path:'/About', element:<About/>}
    ]
   }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
