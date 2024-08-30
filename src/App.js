
import "./App.css";


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Banner from './assets/banner-1.jpeg';
import {Count} from "./components/Count";
import {TaskwithProps} from "./components/TaskwithProps";
import {MyTask} from "./components/MyTask";
import {SimilarType} from './components/SimilarType';



const App = () => {
  const userName="Susan";

  return (
<>
<Header  user={userName}  />
      <h1>Hello {userName}</h1>



      <img src={Banner} alt="banner" />


    <h1>Calculate counter</h1>
      <Count />

      <h1>How to display array of objects here it is some tasks </h1>
      <MyTask />

      <h1>How to use Props</h1>
      <TaskwithProps />

      <h1>Create reusable similar type components with different data and classes. example, succes, warning and alert box</h1>
      <SimilarType />
          
      <Footer />
      </>
  );
}

export default App;


