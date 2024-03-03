import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
import Sidebar from './sidebar'

const Sidedrawer = ({isOpen,onClose}) => {
  
        return (
          <>
           
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <Box display={{
                    base:"block",
                    lg:"none",
                   
                }}>
                <Sidebar/>
                </Box>
              
      
               
      
                <DrawerFooter justifyContent={""} alignItems={"end"}>
                 
                
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }
  


export default Sidedrawer