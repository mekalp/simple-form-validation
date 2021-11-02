import React, { Component, Fragment } from "react";

const validateEmail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    export default class Handle extends Component{

            constructor(){

                super()
                this.state={
                    name:"",
                    email:"",
                    role:"",
                    gender:"",
                    term:"",   
                }
            }   
            handleChange=({target:{name, value, checked}})=>{
  
                //event==>eventObject//
            //console.log(event)
            //console.log(event.target.value)///form field lo type cheysina value backend to run avuthundhi but UI lo kanipinchadhu////
          //Render avvali or UI lo kanipinchali antey, manam setstate() use cheyali////
          //console.log(event.target.name)
            console.log(name,value,checked)

        //  this.setState({name:event.target.value})//--> Every input ki manam handlechange function rayalemu kabatti this sentence manam follow avvatledhu.
        ///object destructuring with dynamic key concept use cheysthunnam////

        //name==>[name] place lo dynamic ga name,email,role vasthunnai with the help of handlechange////

           if(name==="term"){

           value=checked;

           }

           this.setState({[name]: value})
           ///Ikkada name and values are dynamically coming//
//// name(name is attribute which is available in target which is common to all the input elements but we change the solution for that name(belongs to target) by passing the certain keys dynamically like email,role etc) place lo emayina ravachu handlechange nunchi like name,email,role///

         }

validation=()=>{

const {name,email,role,gender,term}=this.state

if(name&&email&&role&&gender&&term){

    if(validateEmail.test(email)){

        return true;
    }


}
return false;

}

            handleSubmit=(event)=>{

                event.preventDefault();

                if(this.validation()){

                    console.log(this.state)

                    ///Here we can fetch API and post the data from the state to the server to store the data// 

                }

            }

            render(){

                return(

               <Fragment>

                   <form onSubmit={this.handleSubmit}>
                
                <div>
                    <label>Candidate Name: </label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                </div>
                <br/>
                <div>
                    <label>Candidate email: </label>
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <br/>
                <div>
                    <label>Role Applied for : </label>
                    <select name="role" value={this.state.role} onChange={this.handleChange}>
                     <option></option>
                     <option value="react">ReactJs Dev</option>
                     <option value="node">NodeJs Dev</option>
                     <option value="mern">Mern Dev</option>

                    </select>
                </div>
                <br/>

                <div>
               
                  <label>Gender: </label>
                  <input name="gender" type="radio" value="Male" onChange={this.handleChange}/>Male
                  <input name="gender" type="radio" value="Female" onChange={this.handleChange}/>Female

                </div>


                <br/>

                <div>

                <input name="term" type="checkbox" checked={this.state.term} onChange={this.handleChange}></input>
                <label>Please accept terms and conditions</label>             

                </div>
                <br/>

                <div>


                 <input type="submit"/>





                </div>



                </form>


               </Fragment>





                )
            }


    }





    //there will be no value attribute for checkboxes///
    //However, we will give atttribute as checked and regarding the information of checked attribute will be availble in event object//
    //as event.target.checked///











    //Instead of writing handlechange function for every input element, we take handle change for one 
    //element and pass parameters to that function dynamically with the help of object destructuring concept//
    //to that above just define name attribute for every element because event.target for the particular 
    //element which is assigned with handlechange function will have both dynamic parameters as {name,value}//
    //example : <input name="" value="" onchange={this.handlechange}>///
    //event object has come with the help of handlechange() method which denotes or explains about the
    // attributes and input element. In that event, there will be event object and in that target will be available as a key//
    //In that key(target), We have sub keys as name and value. Values for those will be dynamically sent by the user//
    //like : event.target.name/// event.target.value///

    /////asalu manaki key ento theyliyadhu dynamic ga vasthundhi////

    //in this above code, keys emayina ravachu dynamic ga, for example : name,email,role ///

    // `{then to add the dynamic key, the syntax is 
    
    //    [key]:"value"
    
    
    // }`



    // `{

    //  Example:  code for adding the key which comes dynamically

    //  const test={name:"GUVI",age:"24};

    //  const key(or any varibale)="name";

    //  const test2={...test,[key]:"mekala"}

    //  console.log(test2)


    // }`




    //basic concept only for check boxes/////

    // `{
    //  For check boxes there will be no attribute as value. Therefore,
    //  we have defined one of the attribute as checked.
    //  checked indicates true or false.

    //  because whenever we check--> it has to show true
    //          whenever we check--> it has to show false.

    //  For that, We have to write an if condition.
    //  why ? if condition 

    //  Because, we know attributes name:value for all the other fields which comes dynamically but do not know value attribute
    //  for checked button but knows the name attribute.

    //  For using setState() method, We have to use name:value

    //  for that we have to use if condition

    //  if(name==="terms"){

    //     value=checked

    //  }

    // }`




    // `{

    //   In traditional forms, whenever we submit forms to the server, it refreshes.

    //   To avoid refreshing the page after clicking the button

    //   we use one of the method--> event.preventDefault()

    //   default meaning is --> default behaviour of refreshing pages after submitting to the server

    //   traditional element

    //   <form action="./URL" onSubmit()>

    //   if submits at the URL and refreshes the page

     //Whatever the details we submits, it submits at the URL//

    // }`





    // `{

    //  For validation of forms, instead of using required attribute, we need to take few conditions.


    //  if(this.state.name&& this.state.email&& this.state.role){

    //      console.log(this.state)


    //  }



    // }`