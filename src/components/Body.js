import React, { useState } from 'react';

const Body = () => {
    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);

    function changefn(e) {
        setText(e.target.value);
    }

    function submitfn(e) {
        e.preventDefault();

        if (text.trim() === "") {
            alert("Please enter some task");
        } else {
            setArr([...arr, text]);
            setText(""); 
        }
    }

    function deletefn(index) {
        const deleteArr = [...arr];
        deleteArr.splice(index, 1);
        setArr(deleteArr);
    }

    function editfn(index) {
        const editedText = prompt("Edit task:", arr[index]);
        
        if (editedText !== null) {
            const editedArr = [...arr];
            editedArr[index] = editedText;
            setArr(editedArr);
        }
    }

    return (
        <div style = {{backgroundColor:"#ccffcc", margin: 0, padding: 0, height:"100vh"}}>
            <h3 style = {{margin:0}}>Enter your task here</h3>
            <form onSubmit={submitfn}>
                <input type="text" name="name" value={text} onChange={changefn} style={{ marginTop: "30px", width:"50%", height:"30px" }}/>
                <input type="submit" value="Add" style = {{marginLeft: "10px", fontSize:"22px"}}/>
            </form>

            <ul>
                {arr.map((value, index) => (
                    <li key={index} style = {{marginBottom:"20px"}}>
                        {value} 
                        <button onClick={() => deletefn(index)} style = {{marginLeft: "40px"}}>Delete</button> 
                        <button onClick={() => editfn(index)} style = {{marginLeft: "20px"}}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Body;











