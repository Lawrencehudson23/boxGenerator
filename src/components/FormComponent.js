import React, {useState} from 'react';
const FormComponent = props => {
    
    const [formState, setFormState]=useState({
        color:"",
        size:"",
        colorList:[],
        sizeList:[],
    })    

    const onColorChangeHandler = event => {
        setFormState ({
            ...formState,
            color:event.target.value

        })
    }
    const onSizeChangeHandler = event => {
        setFormState ({
            ...formState,
            size:event.target.value
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        let newColorList=formState.colorList.slice();
        let newSizeList=formState.sizeList.slice();
        newColorList.push(formState.color);
        newSizeList.push(formState.size);
        setFormState ({
            color:"",
            size:"",
            colorList:newColorList,
            sizeList:newSizeList
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Color: <input value={formState.color} type="text" onChange={onColorChangeHandler}/></label>
                <label>Size: <input value={formState.size} type="text" onChange={onSizeChangeHandler}/></label>
                <input type="submit" value="add"/>
            </form>
            <div style={{display:"flex"}}>
            {formState.sizeList.map((s,i)=>(
                <div key={i} style={{backgroundColor:formState.colorList[i], width:s+"px", height:s+"px"}}></div>
                ))}
            </div>
        </div>


    )
}
export default FormComponent;