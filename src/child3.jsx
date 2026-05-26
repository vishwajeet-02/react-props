import Child4 from "./child4";

const Child3=(props)=>{
    return(
        <>
        <h1>this is child page three</h1>

        <Child4 name={props.name} />
        </>
    )
}
export default Child3;