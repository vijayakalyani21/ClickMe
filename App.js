// import React from 'react';
// import './App.css';
// import ComponentD from './components/ComponentD';
// //import ComponentE from './components/ComponentE';
// //import ComponentF from './components/ComponentF';
// //import ReverseTimer from './components/ReverseTimer';
// //import FunctionalTimer from './components/FunctionalComponent/FunctionalTimer';
// //import Timer from './components/Timer';
// //import MousePointers from './components/FunctionalComponent/MousePointers';
// //import MousePointer from './components/classComponent/MousePointer';
// //import ClassComponent from './components/classComponent/ClassComponent';
// // import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// export const UserContext=React.createContext();

// function App() {

//   return (
//     <div className='App'> 
//     <UserContext.Provider value = {'Vijayakalyani'}>
//     <ComponentD/>
//     </UserContext.Provider>
//       {/* <ReverseTimer/> */}
//       {/* <FunctionalTimer/> */}
//       {/* <Timer/> */}
//       {/* <MousePointer/>
//       <MousePointers/> */}
//       {/* <ClassComponent/> */}
//     {/* <FunctionalComponent/> */}
//     </div>
//   );
//     }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
  }, [gameRunning, timeLeft]);

  const handleImageClick = () => {
    if (gameRunning) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleTopClick = () => {
    if (gameRunning) {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(true);
  };

  return (
    <div className="App">
      <h1>Click the Image Game</h1>
      <p>Click on the image to increase the score. Reduce the time by clicking at the top of the image.</p>
      <p>Score: {score}</p>
      <p>Time Left: {timeLeft} seconds</p>
      <div className="image-container">
        <img src="https://cdn11.bigcommerce.com/s-xf1j2e32mt/images/stencil/1280x1280/products/2494/3399/5d-diamond-painting-iron-man-tony-stark-kit-29473790951607__80756.1630509882.jpg?c=1" alt="Click Me!" width="300" height="200" onClick={handleImageClick} />
        <div className="top-click-area" onClick={handleTopClick}></div>
      </div>
      {!gameRunning && <p>Game Over! Your Score: {score}</p>}
      <button onClick={restartGame} disabled={gameRunning}>Restart Game</button>
    </div>
  );
}

export default App;