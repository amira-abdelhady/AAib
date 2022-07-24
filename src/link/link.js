
const Link =(props)=>{
console.log(props);
  return(
    <>
    <a href={props.href}>{props.students.name}</a>
    <a href={props.href}>{props.students.degree}</a>
    <a href={props.href}>{props.students.age}</a>
    

    </>
  )
}

export default Link;




