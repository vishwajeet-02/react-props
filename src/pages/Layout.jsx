import{Link, Outlet} from 'react-router-dom';
const App =()=>{
  return(
    <>
      
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      
      <hr size="4" color='red' />
        <Outlet/>
        <hr size="4" color='red' />
        www.abc.com | all rights reserved | 2024
      

    </>
  )
}
export default App;