import React,{useState} from 'react'
import { useAuth } from '../../../utils/Auth';
function Account() {

  const [member,memberName] =useState({name : "Annet",collegue : "Nimmy"});
  const [position] =useState({position1 : "Jr Developer", position2 :"Support Engineer"})
  return (
    <div>
  

    <p>{`${member.name}, ${position.position1}`}</p>
    <p>{`${member.collegue}, ${position.position2}`}</p>
    </div>
  )
}

export default Account;