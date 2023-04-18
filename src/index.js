import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);




// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTBhZDczZjc2YzRmODE1Yzc4YmIzMzNiMGIxYjJiZSIsInN1YiI6IjY0M2JhOWQ4ZGExMGYwMWI0NDY0OWZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B4Lb4kP_Ywtf0P2fmJQfe2QfMLuhdHbZtwt5ieHQvhI