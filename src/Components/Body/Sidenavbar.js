
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdjustIcon from '@mui/icons-material/Adjust';
import CastleIcon from '@mui/icons-material/Castle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='one'>
      <Row>
       
      
        <p><LogoDevIcon/>LOGO</p>
        
       <Link to='/react1'><center><p className='opp'>  <DashboardIcon/> Dashboards </p></center></Link>
        <Link to='/about'><p> <MonetizationOnIcon/> Sales distribution</p></Link><br/>
        <Link to='/Purchasing'><p> <ShoppingCartIcon/>  Purchasing</p></Link><br/>
        <Link to='/Inventory'><p> <InventoryIcon/>  Inventory</p></Link><br/>
         <Link to='/Admin'><p> <AdjustIcon/>  Data</p></Link><br/>
        <Link to='/Fianance'><p> <AccountBalanceIcon/> finance</p></Link><br/>
        <Link to='/Data'><p> <SupervisorAccountIcon/> Administrator</p></Link><br/>
  
      </Row>
    </div>
  )
}

export default App