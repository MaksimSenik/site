import { useEffect, useState} from 'react';

function Price()
{
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:80/coffee.php")
            .then(response=>response.json())
            .then(json=>setData(json))
    })






    return (
        <div>
            <table>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Агент</th>
                </tr>
                
            {data.map(item=>(
                <tr><td>{item.Name}</td><td>{item.Price}</td><td>{item.Agent}</td></tr>
            ))
        }
            </table>
        </div>
    )

}
export default Price;