import React, { useEffect, useState } from 'react'
import './home.scss'
import CardList from '../../components/cardlist'
import { URL } from './../../constants/api'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../constants/google-firebase' 

export default function Home() {

  const [users, setUsers] = useState([])

  const createRecord = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } 
  }

  const getRecords = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const result = []
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        ...doc.data
    })
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setUsers(result)
  }

  useEffect(() => {
    getRecords()
  })
  
  // const [data, setData] = useState()
  // const [loading, setLoading] = useState(true)

  // const fetchApi = async () => {
  //   try {
  //     const response = await fetch(URL)
  //     const {results} = await response.json()
  //     setData(results);
  //   }
  //   catch (e) {
  //     console.log(e.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchApi()
  // }, [])

  console.log(users);
  
  return (
    // loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
    //   <CardList data={data}/>

    <div>
      {
        users.length > 0 && users.map(user => (
          <div>
            <p>{user.first}</p>
            <p>{user.last}</p>
            <p>{user.born}</p>
          </div>
        ))
      }
      <p>Home page</p>
      <button onClick={createRecord}>Créer un enregistrement</button>
    </div>
  )
}