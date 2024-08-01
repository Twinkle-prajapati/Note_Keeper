import React, { useEffect, useState } from 'react';
import {Button,Container,Row,Col,Card} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import Cards from './Cards';
import EditIcon from '@mui/icons-material/Edit';




export default function Note() {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const[note,setNote]=useState(getData())
    const[editindex,setEditindex]=useState(null)





    function getData(){
        var storedinfo = JSON.parse(localStorage.getItem('notes'))
        return storedinfo || [];
    }


    function handleDelete(index){
        setNote((prev) => {
            var updatedNotes = prev.filter((note, i) => i !== index);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    }

    function handleEdit(index){
        setEditindex(index)
        setTitle(note[index].title)
        setDesc(note[index].desc)


    }

    const addnote=()=>{
        if(title.trim() === "")
        {
            alert("Title field required")
        }
        else if (title.length > 10) {
            alert("Title should not exceed 10 characters");
        }
        else
        {
            if(editindex !== null)
            {
                const updatedtodos = note.map((item,index)=>(index === editindex ? {title,desc}  : item))
                setNote(updatedtodos)
                setEditindex(null)
                console.log(updatedtodos);
            }
            else
            {
                setNote((prev)=>[...prev,{title,desc}])
            }
            setTitle("")
            setDesc("")
        }


    }


    useEffect(()=>{
        var info = localStorage.setItem('notes',JSON.stringify(note))
        console.log(info);
    },[note])




    return (
        <>
            <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <Card className='w-50 p-3'>
                    <input
                        className='fs-4 border-0'
                        type='text'
                        style={{outline: "none", boxShadow: "none" }}
                        placeholder='Title'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <hr />
                    <textarea
                        className='border-0'
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        rows={4}
                        placeholder='Take a note...'
                        style={{ outline: "none", boxShadow: "none", resize: "none" }}
                    />
                </Card>
                <div className='d-flex justify-content-end w-50 me-5'>
                    <Button
                        className='me-2 d-flex justify-content-center align-items-center'
                        style={{
                            marginTop: "-22px",
                            zIndex: 1,
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            backgroundColor:"#1A838D"
                        }}
                        onClick={addnote}
                    >
                    {editindex ? <EditIcon/> :<AddIcon />}
                    </Button>
                </div>
            </Container>
                    <Container>
                        <Row className='mb-4'>
                            {note.map((item,index)=>(
                                <Col lg={3}>
                                    <Cards key={index} data={item} onDelete={()=>handleDelete(index)} onEdit={()=>handleEdit(index)}/>
                                </Col>
                                  ))}
                            </Row>
                    </Container>



        </>
    );
}
