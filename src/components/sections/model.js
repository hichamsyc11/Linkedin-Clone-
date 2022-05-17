import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';


const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

function Model() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <div>
             <Button onClick={handleOpen} className='new_post_btn'>     
                <span className='new_post_span'>Create New Post </span> 
             </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <header className='header'>
                <h2 className='header_h2'>Create a post</h2>
                 <button className='header_btn'> <CloseIcon/> </button>   
              </header>
              <section className='section'>

              </section>
              <footer className='footer'>

              </footer>
            </Box>
        </Modal>
      </div>
   
  )
}

export default Model