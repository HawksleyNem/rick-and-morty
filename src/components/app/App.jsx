import '../../styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Template from '../template'
import Home from '../../pages/home'
import Single from '../../pages/single'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div>404</div>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'details/:id',
          element: <Single />
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
