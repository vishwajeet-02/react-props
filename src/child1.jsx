import Child2 from "./child2";
const Child1=(props)=>{
    return(
        <>
         <h1>this is child first page</h1>
         <Child2 name= {props.name} />
        </>
    )
}
export default Child1;