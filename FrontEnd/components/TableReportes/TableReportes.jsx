import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRating } from "../../redux/actions/Rating/deleteRating";
//material ui
 import Box from '@mui/material/Box';
 import TableSortLabel from '@mui/material/TableSortLabel';
 import TablePagination from '@mui/material/TablePagination';
 import Button from '@mui/material/Button';
 import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import DialogContent from '@mui/material/DialogContent';
 import DialogContentText from '@mui/material/DialogContentText';
 import DialogTitle from '@mui/material/DialogTitle';

export default function TableReportes({ allRatings, change, setChange }) {
    const rows = allRatings.filter(e => { if(e.attributes.reported){ return e}})
  
      const dispatch = useDispatch()
      const [order, setOrder] = useState('asc');
      
  
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      const [page, setPage] = React.useState(0);
  
      const handleChangePage = (event, newPage) => { false
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
  
      const  descendingComparator = (a, b) => {
        if (b.id < a.id) {
          return -1;
        }
        if (b.id > a.id) {
          return 1;
        }
        return 0;
      }
  
      const getComparator = (order) => {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b)
          : (a, b) => -descendingComparator(a, b);
      }
  
      function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }
  
      //handlers 
        const onClicked = (e) => {
          if(order === 'asc'){
            setOrder('desc')
          }else{
            setOrder('asc')
          }
        };
    
          const [open, setOpen] = useState(false);
        
          const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = (e) => {
            setOpen(false);
          };

          const handleElimnate = (e) => {
            dispatch(deleteRating(e.target.id))
            setOpen(false);
          };
  
      return(
          <div className="flex justify-center bg-[#ffffff] rounded-sm w-auto">
          <Box >
            <div>
            <div className="flex justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-500 font-cool_g text-2xl"
             style={{"marginLeft":"4rem"}}
                   >
                     Todos los comentarios reportados
                   </div >
                  
            </div>
            
            <div className="flex flex-col border-2 border-[#1d4ed8] w-[50rem]">
            <TablePagination
              className="flex-grow"
            rowsPerPageOptions={[5, 10, 15, 20, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
           <table className="font-[Poppins]">
           <TableSortLabel
                active={true}
                direction={order}
                 onClick={e => onClicked(e)}
              />
  
              <thead className="text-black">
                
                <tr>
                <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Id</th>
                <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Rating</th>
                <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Comentario</th>
                <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Titulo</th>
                <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Eliminar</th>
                </tr>
              </thead>
              <tbody className="text-center">
              {
                rows.length === 0 ?
               <tr key={1} className=" hover:bg-[#3b82f6] cursor-pointer duration-300">
                 <td className="py-3 px-6">Todo en orden, no hay reportes</td>
                  </tr>
               :
               stableSort(rows, getComparator(order))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((e) =>(
                  <tr key={e.id} className=" hover:bg-[#3b82f6] cursor-pointer duration-300">
                 <td className="py-3 px-6">{e.id}</td>
                <td className="py-3 px-6">{e.attributes.score}</td>
                <td className="py-3 px-6">{e.attributes.comment}</td>
                <td className="py-3 px-6">{e.attributes.title}</td>
                <td>
      <div>
      <Button
       variant="outlined"
       color="error"
        onClick={handleClickOpen}>
       Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Seguro que quieres eliminar este comentario?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Esta acción es irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id={1} onClick={e => handleClose(e)}>No</Button>
          <Button  id={e.id} onClick={e => handleElimnate(e)} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
                </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
           </div>
            </Box>
            
            {/* <Pagina
            usersForPage={rowsPerPage}
            usersList={usersList.length}
            paginado={paginado}
            avanza={avanza}
            retrocede={retrocede}
          /> */}
  
  
          </div>
      )
}
