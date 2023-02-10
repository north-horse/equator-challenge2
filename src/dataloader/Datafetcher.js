import {useState, useEffect} from 'react';

function Datafetcher({url}){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
          const response = await fetch(url);
          const json = await response.json();
          const fillterData = [];
          json.map(item => {
              return fillterData.push({
                "Name": item.name,
                "Github Link": item.html_url,
                "Download Link": item.download_url,
              })
          })
          setData(fillterData);
        }
        getData();
        // console.log(data);

      }, [url]);
    // async function getData(){
    //     const data = []
    //     const response = await fetch(url);
    //     const json = await response.json();
    // }
    // const data = []
    // const response = await fetch(url);
    // const json = await response.json();
    // // console.log(json);
    // json.map(item => {
    //     return data.push({
    //         "name": item.name,
    //         "html_url": item.html_url,
    //         "download_url": item.download_url,
    //     })
    // })
    // console.log(data);
    return data;
}
export default Datafetcher;