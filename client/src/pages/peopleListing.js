import {useEffect  } from 'react';
import axios from 'axios';
import {useSelector , useDispatch } from 'react-redux';
import PeopleComponent from '../components/PeopleComponent';
import Inputs from '../components/Inputs';
import {setPeople } from '../redux/actions/peopleAction'
 const PeopleListing  = ()=>{
       const people = useSelector(state =>state);
    //   console.log(people.allPeople.people, "people")
      const dispatch = useDispatch();
      useEffect(() => {
        let isCancelled = false
        if(isCancelled == false){
           getPeopleData();
           isCancelled = true
        }
   }, []);
   
   async function getPeopleData() {
         try{
           const res = await axios.get("http://localhost:3333/getPeoples")
           if(res.status == 200){
            //    console.log(res.data)
               dispatch(setPeople(res.data))
           }
        }catch(error){
   
        }
    }
     
    return(
        <div>
            
            <title>Listing people</title>
            <meta name='keywords' content='web development, programming'/>
             
            <div className="_react_card_wrapper">
                <div className="_react_card_wrap">
                    <div className="container">
                        <div className="_react_card_content_wrap">
                            <div className="row">
                            <h1>People Listing</h1>
                            <Inputs/>
                            { console.log("hello from ", people.allPeople.people)}
                                <PeopleComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
   
}
export async function  getServerSideProps( store){
    
    const res = await fetch('http://localhost:3333/getPeoples')
    const people = await res.json()
    return { props: people }
    dispatch(addCount())
}
export default PeopleListing