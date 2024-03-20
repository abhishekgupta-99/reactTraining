import React from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionsTable from './components/Transactions/Transactions';
import Greeting from './components/Greetings';
import SongList from './components/SongList';

function App() {
  return (
    <><h1>Payments UI</h1> 
<button>Find a Transaction          </button>
<button>New Transaction  </button>

<h3>Order Id</h3>
<input></input>
<button>Search</button>
<TransactionsTable />
<Greeting name= "abhishek" age={23}></Greeting>
<SongList></SongList>

</>

);
}

export default App;
