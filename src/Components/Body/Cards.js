import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AlbumIcon from '@mui/icons-material/Album';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import Card from'react-bootstrap/Card'
function Cards() {
  return (
    <Container >
        <Row >
            
              <Card  className='two'>
            <MonetizationOnIcon/>
             <h7>TOTAL SELL</h7> <br/>
             <h5 className='open'>15</h5>
             </Card>
            
            <Card className='two'>
              <AlbumIcon/>
              <h7>NEW SELL</h7> <br/>
             <h5 className='open'>2</h5>
            </Card>
    
            <Card className='two'>
            <ChangeCircleIcon/>
            <h7>DEFAULT </h7> <br/>
             <h5 className='open'>5</h5>
             </Card>
            <Card className='two'>
            <DraftsIcon/>
            <h7>DRAFT </h7> <br/>
             <h5 className='open'>1</h5>
             </Card>
             <br/>
        </Row>
    </Container>
  )
}

export default Cards