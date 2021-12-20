import {useState} from "react";
import {useDispatch  } from 'react-redux'
import axios from 'axios';
import {updatePeople } from '../redux/actions/peopleAction'


 const InputList =() =>{
    // const dispatch = useDispatch();
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
        const res = await axios.post("http://localhost:3333/storePeople", {...input})
        if(res.status == 200){
            // dispatch(updatePeople(res.data))
            setInput({
                 id:-1,
                 name: "",
                email: "",
                title: "",
                image: ""
            })
        }
       
    }
    return (
        <div id="_inputs"  className="_react_form_wrapper">
        <div className="_react_form_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 mx-auto">
                        <div className="_react_form_content">
                            <div className="_react_form_content_inner" >
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name"   
                                          value={input.name} onChange={handleChange}
                                        name="name"
                                        placeholder="Name"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="email"  placeholder="Email" 
                                        onChange={handleChange}
                                        name="email"  value={input.email}
                                     />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title"  placeholder="Title"
                                         onChange={handleChange}
                                        name="title"  value={input.title}
                                    />
                                    </div>
                                     
                                    
                                   <div className="col-3 mx-auto">
                                         <button  type="submit" onClick={handleClick}  className="btn btn-primary d-block w-100 py-2">Add +</button>
                                     </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
         
    )
    
}
export default InputList
 