import {clearClient} from '../../reducers/clientsSlice'

export const clear =() => (dispatch) =>{
    dispatch(clearClient())
}