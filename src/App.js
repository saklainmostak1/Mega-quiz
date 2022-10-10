import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ExtraQus from './components/ExtraQuestions/ExtraQus';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Subject from './components/Subject/Subject';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
      {
        path: '/', 
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/subject',
            element: <Subject></Subject>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/question',
            element: <ExtraQus></ExtraQus>
          }
         ]
      }
  ])
  return (
    <div className="App">
        <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
