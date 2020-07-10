import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김영수',
  'birthday' : '960321',
  'gender' : '남성',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '961121',
  'gender' : '남성',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍빈나',
  'birthday' : '911112',
  'gender' : '여성',
  'job' : '귀요미'
}
]

function App(){
    return (
      <div>
        {customers.map(c=>{return(<Customer key={c.id}id={c.id}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}image={c.image}/>)})}       
      </div>
    );
}

export default App;
