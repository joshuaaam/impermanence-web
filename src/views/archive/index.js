/*
 * @Author: g05047
 * @Date: 2023-05-10 10:07:11
 * @LastEditors: g05047
 * @LastEditTime: 2023-05-10 14:55:00
 */
import "./index.css";

export default function HomePage() {
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

  const list = [
    {
      title: "构建爬虫镜像【完整】",
      desc:
        "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
    },
    {
      title: "构建爬虫镜像【完整】",
      desc:
        "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
    }
  ];

  const listItem = list.map((item,i) => (
    <li className="blog-item" key={i}>
      <h2>{item.title}</h2>
      <div>{item.desc}</div>
      <div className="create-time">
        2023.05.08</div>
    </li>
  ));

  return (
    <div className="home-page">
      <ul>{listItem}</ul>
    </div>
  );
};
