import React, { Component } from 'react';
import CourseForm from './component/CourseForm'
import CourseList from './component/CourseList'
import './App.css'
class App extends Component {
  state ={
    courses:[
      {name:'html'}, {name:'css'}, {name:'js'}, {name:'jquery'}, {name:'c#'}
    ]
    , current:''
  }
//UpdateCourse
updateCourse =(e) =>{
  this.setState({
    current:e.target.value
  })}

//AddCourse
  AddCourse = (e)=>{
    e.preventDefault();
  let current = this.state.current;
  let courses= this.state.courses;
  courses.push({name:current})
  this.setState({
    courses ,
    current:''
  })

  }
  //DeleteCourse

  DeleteCourse = (index) =>
  {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({courses})

  }

  render() {
      const {courses}= this.state;
      const courseList= courses.map((course,index) =>{ 
        return   <CourseList details={course} key={index} index={index} Delete={this.DeleteCourse} />  } )
    return (
      <div className="App container">

  <h1 className="title"> Add Course </h1>
  <CourseForm current={this.state.current} updateCourse={this.updateCourse} AddCourse={this.AddCourse} /> 
  <ul className="courses-list">
{courseList}
  </ul>
 
      </div>
    );
  }
}

export default App;
