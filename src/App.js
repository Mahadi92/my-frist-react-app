import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const headingCss = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '50px',
    boxShadow: '5px 5px 15px #000',
    color: '#282C34'
  }
  const products = [
    {name: 'Photoshop', price: '$89.99'},
    {name: 'Illustrator', price: '$20.99'},
    {name: 'Premiere Pro', price: '$20.99'},
    {name: 'After Effects', price: '$256.99'},
    {name: 'After Lightroom', price: '$23.99'}
  ]
  const friends = ['Srinath', 'aminul', 'sayeed', 'Nayeem', 'Nur', 'Pervaes']

  const phones = [
    {brandName: 'Xaomi 6 pro', ram: '3gb', rom: '32gb', battery: '4000mh'},
    {brandName: 'POCO X3', ram: '6gb', rom: '128gb', battery: '6000mh'},
    {brandName: 'Real Me 9', ram: '6gb', rom: '128gb', battery: '6000mh'},
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={headingCss}>My first Heading in React</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut quibusdam! Provident commodi omnis ad similique ex ea error facilis qui dolore alias nesciunt assumenda maiores distinctio blanditiis, quod fugit!</p>

        <Counter></Counter>

        <h2>Friend List</h2>
        <ul>
          {
            friends.map( fnd => <li>{fnd}</li>)
          }
        </ul>

        <h2>Phone List</h2>
        <ul>
          {
            phones.map( phn => <li>{phn.brandName}</li>)
          }
        </ul>
          {
            phones.map(phn => <Phones phone={phn}></Phones>)
          }

        <Students name="Mahadi Hasan" roll="937524" reg="862575" department="Computer"></Students>

        <Students name="Mishu Sayeed" roll="515586" reg="429858" department="Computer"></Students>

        <h1>Products</h1>
        {
          products.map(pd => <Products product={pd}></Products>)
        }
        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products> */}

        <Test></Test>
        <Post></Post>

      </header>
    </div>
  );
}

function Test(){
  const [number, setNumber] = useState(1);
  const timeDuration = setInterval( updateNumber, 1000);
  function updateNumber() {
    setNumber(number + 1)
    clearInterval(timeDuration)
  }
return(
  <h1>{number}</h1>
)
}

function Post(){
  const postStyle = {
    border: '3px solid #ff00cd',
    borderRadius: '30px',
    margin: '15px',
    width: '600px',
    // height: '300px',
    backgroundColor: '#ac039326'
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

    return (
      
    posts.map(post => {
      return (
        <div style={postStyle}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>  
      )
    })

    // <div style={postStyle}>
    //   <h4>
    //   {
    //     posts.map(post => post.title)
    //   }
    //   </h4>
    //   <p>
    //   {
    //     posts.map(postContent => postContent.body)
    //   }
    //   </p>
    // </div>
  )
}

function Counter(){
    const [count, setCount] = useState(10)
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )
}
function Phones(props) {
  const phoneStyle = {
    border: '4px solid #1BCDDB',
    borderRadius: '30px',
    margin: '15px',
    padding: '10px 30px'
  }
  const {brandName, ram, rom, battery} = props.phone;
  return (
    <div style={phoneStyle}>
      <h2>{brandName}</h2>
      <p>Ram: {ram}</p>
      <p>Rom: {rom}</p>
      <p>Battery: {battery}</p>
    </div>
  )
}

function Students(props){
  const divStyle ={
    width: '80%',
    border: '2px solid #FF9800',
    margin: '5px',
    borderRadius: '30px'
  }
  return (
    <div style={divStyle}>
      <h2>{props.name}</h2>
      <p>Roll: {props.roll}</p>
      <p>Reg: {props.reg}</p>
      <p>Department: {props.department}</p>
    </div>
  )
}

function Products(props){
  const productStyle = {
    border: '2px solid #FB1100',
    borderRadius: '10px',
    backgroundColor: '#0000006b',
    margin: '10px',
    padding: '10px',
    width: '200px',
    height: '200px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  )
}

export default App;
