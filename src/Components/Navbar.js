import { Menu } from 'antd';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <Menu 
         mode="horizontal" style={{justifyContent:'center'}} >
        <Menu.Item key="Home">
         <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="Login" >
        <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="SignUp">
        <Link to="/signup">SignUp</Link>
        </Menu.Item>        
        </Menu>
    )
}

export default Navbar;