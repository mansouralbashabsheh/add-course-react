import React , { Component , Fragment } from 'react';

class CourseList extends Component {
    renderCourse =() =>{
        return(
            <li>{this.props.details.name}

            <button onClick={()=>{this.props.Delete(this.props.index)}}>Delete Course</button>
            </li> 
        )
    }
  render() {
    return (
      <Fragment>
   {this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;
