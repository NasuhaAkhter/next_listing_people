import React, {useState} from "react";
import {useSelector , useDispatch } from 'react-redux';
import {updateEditOn,updateItem ,deleteItem} from '../redux/actions/peopleAction'
import axios from 'axios';

const PeopleComponent =() =>{
    const people = useSelector((state) =>state.allPeople.people);
    console.log("people from component", people)
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(-1)
    const [input, setInput] = useState({
        id:-1,
       name: "",
       email: "",
       title: "",
       image: ""
   })
   const handleChange = (e ) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    async function handleClick(){
        const res = await axios.post("http://localhost:3333/editPeople", {...input})
        if(res.status == 200){
            dispatch(updateItem(input))
            setInput({
                id:-1,
                name: "",
                email: "",
                title: "",
                image: ""
            })
        }
    }
    const editItem =( e,person, index) =>{
         setEditIndex(index)
         dispatch(updateEditOn(index))
         input.id = person.id
         input.name = person.name
         input.email = person.email
         input.title = person.title
         setInput({
             id: person.id,
             name: person.name,
             email: person.email,
             title: person.title,
         });
    }
    const deletePerson =( e ,person , index ) =>{
        console.log("delete on",e, index)
        var id = -1
        id = person.id
        deleteItemFromBAck(index, id )
    }
    async function deleteItemFromBAck(index, id) {
        try{
            const res = await axios.post("http://localhost:3333/deletePeople", {id:id})
            if(res.status == 200){
                dispatch(deleteItem(index))
            }
         }catch(error){
    
         }
    }
    return (
         <div>
             
             {people.map((person, index) =>{
                   return <div className="col-xl col-md col-sm col-12" key={person.id}>
                    <div className="_react_card_content">
                        <div className="_react_card_content_inner">
                            <p>
                            <span className="cross_icon"   onClick={((e) => deletePerson(e, person, index))}   >X &nbsp; </span>
                            <span  onClick={((e) => editItem(e, person, index))} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4853 13.4853L34.4142 6.41421C33.6332 5.63317 32.3668 5.63316 31.5858 6.41421L14.6153 23.3848L24.5147 33.2842L41.4853 16.3137C42.2663 15.5327 42.2663 14.2663 41.4853 13.4853ZM21.7995 34.8116L13.0879 26.1L9.66548 38.234L21.7995 34.8116Z" fill="black"/>
                                </svg>
                            </span>
                            </p>      
                            {
                             (  person.isEdit == true && index == editIndex) ?
                             <div>
                                <input type="text" placeholder='name' name='name' className="form-control" id="name"   
                                          value={input.name} onChange={handleChange}></input>
                                <input type="text" placeholder='email' name='email' className="form-control" id="email"   
                                          value={input.email} onChange={handleChange}></input>
                                <input type="text" placeholder='title' name='title' className="form-control" id="title"   
                                          value={input.title} onChange={handleChange}></input>
                                <button  type="submit" onClick={handleClick}  className="btn btn-success d-block w-100 py-2">Update +</button>
                                {/* <p>{person.isEdit == true? "true": "false"}, {index}, {editIndex}</p> */}
                            </div>
                           :
                           <div className="_react_card_txt">
                               
                               <h3 className="_react_card_name">{person.name}</h3>
                               <p className="_react_card_email">{person.email}</p>
                            </div>
                           }                  
                            
                        </div>
                        
                    </div>
               </div>
             })}
             <h1>from people component</h1>
         </div>
         
    )
    
}
export default PeopleComponent
 