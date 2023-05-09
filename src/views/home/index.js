function Home() {
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.post('article/detail',{
  //       id:26
  //     },{headers: {'Content-Type': 'application/json;charset=UTF-8'},timeout: 150000});
  //     console.log(result)
  //     setText(result.data.data.content);
  //   };

  //   fetchData();  
  // }, []);

  return (
    <div className="App">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}

export default Home;


