import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login

// import React from 'react'
// import { Button, Checkbox, Form, Input, message } from 'antd';
// import '../resources/authentication.css'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'


// function register() {

//   // const navigate = useNavigate();
//   const onFinish = async (values) => {

//     try {
//       // const user = await axios.post('api/user/login', values);
//       await axios.post('api/user/login', values);
//       message.success('Login successfull');
//       // localStorage.setItem('Resume-users', JSON.stringify(user))
//       // navigate('/home')
//     } catch (error) {
//       message.error('Login failed');
//     }
//   }


//   return (
//     <div className='auth-parent'>
//       <Form layout='vertical' onFinish={onFinish}>
//         <h1>Login</h1>
//         <hr></hr>
//         <Form.Item name='username' label='Username'>
//           <Input placeholder='' />
//         </Form.Item>

//         <Form.Item name='password' label='Password'>
//           <Input type='password' />
//         </Form.Item>

//         <div className='d-flex align-items-center justify-content-between'>
//           <Link to='/register'> Click here to Register</Link>
//           <Button type='primary' htmlType='submit' >
//             LOGIN
//           </Button>
//         </div>
//       </Form>
//     </div>
//   )
// }

// export default register