import { useEffect, useState} from 'react';
import "./Price.css"

function Price()
{
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:80/coffee.php")
            .then(response=>response.json())
            .then(json=>setData(json))
    })





    return(
    <div>
    <main className="menu-section">
      <table className="valorant-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Агент</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr 
            key={item.Name} 
            data-agent={item.Agent ? item.Agent.toLowerCase() : ''} /* Передаем имя агента в нижнем регистре */
            >
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.Agent}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </main>
  </div>
)};
export default Price