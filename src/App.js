import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ExtraQus from './components/ExtraQuestions/ExtraQus';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
      {
        path: '/', 
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () =>{
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Home></Home>
          },
          {
            path: '/quiz/:quizId',
            loader: ({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element: <Quiz></Quiz>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/question',
            element: <ExtraQus></ExtraQus>
          },
          {
            path: '/about',
            element: <About></About>
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
