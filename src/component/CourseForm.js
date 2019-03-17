import React from 'react';

const CourseForm = (props) =>{

    return(
        <form>
      <input className="add-course" type="text" value={props.current}  onChange={props.updateCourse}/>
      <input className="btn-add" type="submit" onClick={props.AddCourse}/>
        </form>
    )
}

export default CourseForm;