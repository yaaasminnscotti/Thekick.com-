import axios from 'axios';

async function App(){
    axios.get('http://localhost:3000/usuarios',).then((response)=>console.log(response)).catch((error)=>(console.log(error)));
}
export default App;
