import Inputs from '../components/Inputs'
import List from '../components/List'
import ListContext from '../contexts/ListContext';
import GlobalContext from '../contexts/GlobalContext';


const peopleListing = ()=>{

    return (
        <div>
            <h1>from people listing </h1>
            <GlobalContext>
                <ListContext>
                  <Inputs/> <List />
                </ListContext>
            </GlobalContext>
             
        </div>
    )
}
export default peopleListing