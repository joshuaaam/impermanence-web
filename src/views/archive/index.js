/*
 * @Author: g05047
 * @Date: 2023-05-10 10:07:11
 * @LastEditors: g05047
 * @LastEditTime: 2023-05-11 11:27:59
 */
import "./index.css";

export default function ArchivePage() {
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

  const data = [
    {
      year:2023,
      list:[{
        title: "构建爬虫镜像【完整】",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      },
      {
        title: "基于scrapy与selenium的爬虫以及docker部署",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      }]
    },
    {
      year:2021,
      list:[{
        title: "总有一些美好值得期待",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      },
      {
        title: "阿婆六茶花谷观星台银河拍摄",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      },
      {
        title: "使用Docker搭建GitLab服务器",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      },
      {
        title: "唯日出华美而无上",
        desc:
          "拉取centos7镜像，运行容器 docker pull centos:7 docker r... 完整阅读"
      }]
    }
  ];

  const listItem = data.map((item,index) => (
      <li>
        <p className="year">{item.year}</p>
        {item.list.map((e,i)=>(
          <div>
            <h4 key={i+'k'}>{e.title}</h4>
            {/* <p>2023-05-11</p> */}
          </div>
        ))}
      </li>
  ));

  return (
    <div className="archive-page">
      <ul>{listItem}</ul>
    </div>
  );
};
