
import Logo from '../assets/logo.png';
export const Header = (props) => {
  return (
    <header>
      
       <div className="logoDiv"> <img src={Logo} className='logo' alt='' /><span>{props.user}</span></div>
        
        <a href="/">Home</a>
    </header>
  )
}


