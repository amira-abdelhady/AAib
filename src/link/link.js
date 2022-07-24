
const Link =(props)=>{
console.log(props);
  return(

    <>
     <a href={props.href}>{props.name}</a>
    <a href={props.href}>{props.age}</a>
    <a href={props.href}>{props.salary}</a>
    <a href={props.href}>{props.job}</a>
    <a href={props.href}>{props.students.name}</a>
    <a href={props.href}>{props.students.degree}</a>
    <a href={props.href}>{props.students.studentAge}</a>
    </>
   
  )
}

export default Link;




