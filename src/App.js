import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  get axios() {
    const axiosBase = require('axios');
    return axiosBase.create({
        baseURL: "http://localhost:3001",
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'
    });
  }

  


}

export default App;
