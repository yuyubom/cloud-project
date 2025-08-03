import React, { useState,useEffect } from 'react'
import { db } from '../config/firebase';
import { collection,addDoc,getDocs,doc,deleteDoc,updateDoc } from 'firebase/firestore';
const Books = () => {
    const [book,setBook]=useState("");
    const [year,setYear]=useState(0);
    const [author,setAuthor]=useState("");
    const [books,setBooks]=useState([]);
    const [updated,setUpdated]=useState("");

    const dbreference=collection(db,"books");
    const getBooks=async()=>{
        const result=await getDocs(dbreference);
        console.log(result.docs.map(c=>c.data()));
        setBooks(result.docs.map(c=>({...c.data(),id:c.id})))
    }
    useEffect(()=>{
        getBooks();
    },[])
    const createData=async()=>{
        //const data=doc(db,"movies");
        const create=await addDoc(dbreference,{
            book_name:book,
            publish:year,
            author:author,
        });
        console.log(create.id);
        getBooks();
        setAuthor("");
        setBook("");
        setYear("");
    }
    const deleteMovie=async(title)=>{
        const ref=doc(db,"books",title);
        await deleteDoc(ref);
        console.log(ref);
        getBooks();
    }
    const updateMovie=async(id)=>{
        const ref=doc(db,"books",id);
        await updateDoc(ref,{book_name:updated});
        getBooks();
    }
  return (
    <div>
        <h1>Enter the book details here!</h1>
        <br />
        <br />
        <br />
        <label htmlFor="">Book Name: </label>
        <input type="text" onChange={e=>setBook(e.target.value)} />
        <br />
        <label htmlFor="">Published Year: </label>
        <input type="number" onChange={e=>setYear(e.target.value)} />
        <br />
        <label htmlFor="">Author: </label>
        <input type="text" onChange={e=>setAuthor(e.target.value)} />
        <br />
        <button onClick={createData}>Upload</button>
        <br />
        <h2>Here are the book list</h2>
        <br />
        {books.map((c,i)=>{
            return (
                <>
                    <li key={i}>{`Book name : ${c.book_name} | Published year : ${c.publish} | Author : ${c.author}`}</li>
                    <button key={i} onClick={()=>deleteMovie(c.id)}>delete</button>
                    <input onChange={(e)=>setUpdated(e.target.value)}/>
                    <button onClick={()=>updateMovie(c.id)}>update</button>
                </>
            )
        })}
    </div>
  )
}

export default Books