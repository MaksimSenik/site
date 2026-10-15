import { UseEffect, UseState} from 'react';

function Price()
{
    const[data, setData] = UseState([]);
    UseEffect(()=>{
        fetch("http://localhost:80/coffee.php")
            .then(response=>response.json())
            .then(json=>setData(json))
    })






    return (
        <div>
            {data.map(item=>(
            <h1>{item.Name}</h1>,
            <h1>{item.Price}</h1>,
            <h1>{item.Agent}</h1>
        ))}
        </div>
    )

}
export default Price;