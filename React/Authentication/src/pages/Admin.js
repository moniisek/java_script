import React from 'react'
import {Button} from '../components/AuthForm'


const Admin = (props) => {
  return (
    <div>
      <div>Admin page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  )
};

export default Admin;
