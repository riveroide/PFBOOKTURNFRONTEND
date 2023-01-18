import React, { useState } from "react";
import { putUser } from "../../redux/actions/users/putUser";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

//material ui
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
 import Box from '@mui/material/Box';
 import TableSortLabel from '@mui/material/TableSortLabel';
 import TablePagination from '@mui/material/TablePagination';

const TableUsers = ({usersList, change, setChange}) => {
  const session = useSession()
  console.log(session)

    const dispatch = useDispatch()
    const [order, setOrder] = useState('asc');
    

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
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
    const handleChange = (e) => {
        let id = parseInt(e.target.id)
        dispatch(putUser(id, {blocked: e.target.checked}))
        setChange(!change)
      };

      const onClicked = (e) => {
        if(order === 'asc'){
          setOrder('desc')
        }else{
          setOrder('asc')
        }
      };
  
      const rows = usersList


    return(
        <div className="bg-[#ffffff] rounded-sm w-auto">
        <Box sx={{ width: '90%' }}>
          <div>
          <div className="flex justify-center items-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-500 font-cool_g text-2xl"
           style={{"marginLeft":"4rem"}}
                 >
                   Todos los usuarios
                 </div >
                
          </div>
          
          <div className="flex flex-col items-center  border-[#1d4ed8]">
         <table className="font-[Poppins] border-2 w-6/12">
         <TableSortLabel
              active={true}
              direction={order}
               onClick={e => onClicked(e)}
            />

            <thead className="text-black">
              
              <tr>
              <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Id</th>
              <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Username</th>
              <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Email</th>
              <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Confirmados</th>
              <th className="py-3 border-b-[1px] border-[rgba(224, 224, 224, 1)]">Bloqueados</th>
              </tr>
            </thead>
            <tbody className="text-center">
            {
             stableSort(rows, getComparator(order))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((e) =>(
                <tr key={e.id} className=" hover:bg-[#3b82f6] cursor-pointer duration-300">
                <td className="py-3 px-6">{e.id}</td>
                <td className="py-3 px-6">{e.username}</td>
                <td className="py-3 px-6">{e.email}</td>
                <td className="py-3 px-6">{e.confirmed? "confirmado":"no confirmado"}</td>
                <td className="py-3 px-6"><FormControlLabel
            control={
              <Switch 
              id={`${e.id}`} 
              defaultChecked={e.blocked} onChange={e => handleChange(e)} />
            }
            label={e.blocked? "Bloqueado" : "Desbloqueado"}
          /></td>
                </tr>
              ))
            }
            </tbody>
            <TablePagination
            className="w-[25rem]"
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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
};

export default TableUsers;