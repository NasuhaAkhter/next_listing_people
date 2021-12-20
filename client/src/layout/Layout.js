import  store  from '../redux/store';
import { Provider } from 'react-redux' ;

const Layout = ({children}) =>{

    return (
       
        <div>
             <Provider store={store}>
               {children}
             </Provider>
           
        </div>
    )
}
export default Layout