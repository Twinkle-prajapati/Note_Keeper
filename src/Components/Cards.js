import React from 'react'
import {Container, Card, Button } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cards({data,onDelete,onEdit}) {

    const {title,desc} = data
    console.log(title,desc);




  return (
    <>
     <Container className='pt-5'>

                        <Card className='p-3'>
                            <input
                                className='fs-5 border-0'
                                type='text'
                                style={{ outline: "none", boxShadow: "none" }}
                                value={title} readOnly
                            />
                            <hr />
                            <textarea
                            value={desc}
                                className='border-0'
                                rows={3}
                                style={{ outline: "none", boxShadow: "none", resize: "none" }}
                                readOnly
                            />
                        </Card>
                        <div className='d-flex justify-content-end w-100'>
                        <Button
                        className='me-2 d-flex justify-content-center align-items-center'
                        style={{
                            marginTop: "-20px",
                            zIndex: 1,
                            width: "37px",
                            height: "37px",
                            backgroundColor:"#1A838D"
                        }}
                        onClick={onEdit}
                    >
                        <EditIcon />
                    </Button>
                    <Button
                        className='me-3 d-flex justify-content-center align-items-center'
                        style={{
                            marginTop: "-20px",
                            zIndex: 1,
                            width: "37px",
                            height: "37px",
                            backgroundColor:"#1A838D"
                        }}
                        onClick={onDelete}

                    >
                        <DeleteIcon />
                    </Button>
                        </div>

            </Container>
    </>
  )
}
