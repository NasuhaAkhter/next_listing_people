import React from "react";
import {useSelector , useDispatch } from 'react-redux';
import {updateEditOn } from '../redux/actions/peopleAction'

const PeopleComponent =() =>{
    const people = useSelector((state) =>state.allPeople.people);
    const dispatch = useDispatch();

    const editItem =( e,person, index) =>{
         dispatch(updateEditOn(index))
    }
    return (
         <div>
             {people.map((person, index) =>{
                   return <div className="col-xl col-md col-sm col-12" key={person.id}>
                    <div className="_react_card_content">
                        <div className="_react_card_content_inner">
                            <p>
                            <span className="cross_icon"  >X &nbsp; </span>
                            <span  onClick={((e) => editItem(e, person, index))} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4853 13.4853L34.4142 6.41421C33.6332 5.63317 32.3668 5.63316 31.5858 6.41421L14.6153 23.3848L24.5147 33.2842L41.4853 16.3137C42.2663 15.5327 42.2663 14.2663 41.4853 13.4853ZM21.7995 34.8116L13.0879 26.1L9.66548 38.234L21.7995 34.8116Z" fill="black"/>
                                </svg>
                            </span>
                            </p>                        
                            <div className="_react_card_txt">
                               
                                <h3 className="_react_card_name">{person.name}</h3>
                                <p className="_react_card_email">{person.email}</p>
                            </div>
                        </div>
                        
                    </div>
               </div>
             })}
             <h1>from people component</h1>
         </div>
         
    )
    
}
export default PeopleComponent
 