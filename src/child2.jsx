import Child3 from "./child3";
const Child2 =(props)=>{
    return(
        <>
        <h1>this is child second page</h1>
        <Child3 name={props.name}/>
        </>
    )
}
export default Child2;