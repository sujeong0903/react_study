import React, {useState} from 'react';
import Header from './Component/header';
import Content from './Component/content';
import './styles.css';



const App = () => {
  const [people, setPeople]= useState(
    [
      {name: 'kim', nickname: 'zio', flag: false},
      {name: 'jeong', nickname: 'jay', flag: false},
      {name: 'song', nickname: 'leo', flag: false},
      {name: 'lee', nickname: 'hue', flag: false},
    ]
  );

  const clickEvent = (index) => {
    const temp = people.map(item => {
      const obj = {}
      obj['name'] = item.name;
      obj['nickname'] = item.nickname;
      obj['flag'] = false;
      return obj;
    })
    temp[index].flag = true;
    setPeople(temp);
  }

  return (
    <>
      <Header list={people}/>
      <Content list={people} event={clickEvent}/>
    </>
  );
};

export default App;