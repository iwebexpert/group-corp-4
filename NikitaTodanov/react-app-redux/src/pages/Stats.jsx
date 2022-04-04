import React, { useEffect,useState } from 'react';
import ContainerWrapper from './ContainerWrapper';

function Stats({roles}) {
    const [result, setResult] =useState([])
    console.log(result)

  
    useEffect(()=>{
        if(roles[0] === 'users'){
            return
        }
          const options = {
      method: "GET",
    };
        fetch('/api/log',options)
        .then((result) => result.json())
        .then((result) => {
        if (result.error) {
          throw result.error;
        }
        console.log("result", result);
        setResult(result)
    
      })
    
    },[])
    console.log("props", roles)
    return (
        <ContainerWrapper>
                {roles[0] === 'user' ? (<div>У вас нет достпа для просмотра данной страницы</div>) : (
                    <div>
                        {result.map((res,key)=>(
                            <div key={res.userId +1}>
                            <div>Информация о действиях пользователя: {res.userId}</div>
                            <div>{res.userId}</div>
                            <div>{res.type}</div>
                            <div styles={{color:"red"}}>{res.content}</div>
                            <div>{res.action}</div>
                            </div>
                        
                        ))}
                    </div>
                )}
        </ContainerWrapper>
    );
}

export default Stats;