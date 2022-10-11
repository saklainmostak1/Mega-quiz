import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ExtraQus from './components/ExtraQuestions/ExtraQus';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Topic from './components/Topic/Topic';
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
            path: '/topic',
            loader: () =>{
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Topic></Topic>
          },
          {
            path: '/question',
            element: <ExtraQus></ExtraQus>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '*',
            element: <div> This Page Is Not Found 404 !!!!! </div>
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
