import { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';


const User = ({ todos }) => <Layout>{JSON.stringify(todos)}</Layout>;

User.getInitialProps = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    console.log('SERVER RENDERED', response);
    return {
        todos: response.data
    };
};

// const User = () => {
//     const [todos, setTodos] = useState([]);
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(res => setTodos(res.data))
//     }, [])
//     return <Layout>{JSON.stringify(todos)}</Layout>
// }

export default User;
