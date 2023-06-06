import "./index.css";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useState, useEffect, useRef } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom'
import MarkNav from 'markdown-navbar';

export default function HomePage() {
  const listHeight = useRef()
  const [text, setText] = useState('');
  const state = useLocation()

  const fetchData = async () => {
    const result = await axios.post('app/getArticleDetail', {
      id: state?.state?.id
    }, { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, timeout: 150000 });
    setText(result.data.data.content);
  };


  let handleScroll = function () {
    let changeNav_box = document.querySelector(".nav");
    let scrollY = window.scrollY;

    if (scrollY >= listHeight.current.offsetTop) {
      changeNav_box.style.position = "fixed";
      changeNav_box.style.top = '0px'
      changeNav_box.style.left = listHeight.current.offsetLeft + 'px'
    } else {
      changeNav_box.style.position = "relative";
      changeNav_box.style.top = '0px'
      changeNav_box.style.left = '0px'
    }
  }

  fetchData()

  useEffect(() => {
    // 滚动事件
    window.addEventListener("scroll", handleScroll)
    // 浏览器窗口大小发生变化
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  },);


  return (
    <div className="detail-content">
      <MdEditor className="md-editor" modelValue={text} previewOnly={true} onChange={setText} />

      <div ref={listHeight} className="nav-content" >
        <MarkNav
          className="nav"
          source={text}
          headingTopOffset={100} //离顶部的距离
          ordered={false}   //是否显示标题题号1,2等
        />
      </div>
    </div>
  );
};
