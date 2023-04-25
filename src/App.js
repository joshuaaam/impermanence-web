// import logo from './logo.svg';
import './App.css';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useState,useEffect  } from 'react';
import axios from "axios"



function App() {
  const [text, setText] = useState('# Hello Editor');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post('http://localhost:8000/article/detail',{
        data:{
          id:26
        }
      });
      console.log(result)
      setText(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}

    <MdEditor modelValue={text} previewOnly={true} onChange={setText} />
    </div>
  );
}

export default App;
