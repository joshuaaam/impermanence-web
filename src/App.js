/*
 * @Author: g05047
 * @Date: 2023-05-10 10:07:11
 * @LastEditors: g05047
 * @LastEditTime: 2023-05-10 15:41:35
 * @Description: file content
 */
// import logo from './logo.svg';
import './App.css';
// import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
// import { useState,useEffect  } from 'react';
// import axios from "axios"
import Home from './views/home/index'
import Archive from './views/archive/index'

import Head from './components/header/index'
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
  // const [text, setText] = useState('# Hello Editor');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.post('http://localhost:8000/article/detail',{
  //       data:{
  //         id:26
  //       }
  //     });
  //     console.log(result)
  //     setText(result.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      
      {/* <header className="App-header">
        
      </header> */}
      
      <BrowserRouter>
        <Head></Head>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive></Archive>} />
          <Route path="/about" element={<div></div>} />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    {/* <MdEditor modelValue={text} previewOnly={true} onChange={setText} /> */}
    </div>
  );
};
