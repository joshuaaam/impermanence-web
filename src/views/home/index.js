import "./index.css";
import { useState,useEffect  } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [list,setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('app/getArticleList',{
        page:1,pageSize:10
      },{headers: {'Content-Type': 'application/json;charset=UTF-8'},timeout: 150000});

      setList(result.data.data)
    };

    fetchData();
  }, []);


  const listItem = list.map((item,i) => (
    <li className="blog-item"   key={i} > 
      <h2 onClick={()=>{
      navigate('detail',{ state: {id:item.id}})
    }}>{item.title}</h2>
      <div>{item.desc}</div>
      <div className="create-time">{item.create_time || '2023-05-10' }</div>
    </li>
  )); 

  return (
    <div className="home-page">
      <ul>{listItem}</ul>
    </div>
  );
};
