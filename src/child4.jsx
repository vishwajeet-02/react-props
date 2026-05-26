import Child5 from "./child5";

const Child4=(props)=>{
    return(
        <>
<h1>
this is my child fourth page
<Child5 name={props.name}/>
</h1>

        </>
    )
}
export default Child4;