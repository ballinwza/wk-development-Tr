import { useState, useEffect, useRef } from "react";

const CounterSection = () =>{

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)

    const contentDetail =[
        {
            timer:count1,
            content:'awards'
        },
        {
            timer:count2,
            content:'clients'
        },
        {
            timer:count3,
            content:'team'
        },
        {
            timer:count4,
            content:'project'
        }
    ]

    useEffect(() => {
        const countInterval = (setCount, timer) =>{
            setInterval(()=>{setCount( count=> count +1)},timer)
        }

        const interval01 = countInterval(setCount1, 1200)
        const interval02 = countInterval(setCount2, 400)
        const interval03 = countInterval(setCount3, 2000)
        const interval04 = countInterval(setCount4, 800)

        return () => {
            clearInterval(interval01)
            clearInterval(interval02)
            clearInterval(interval03)
            clearInterval(interval04)
        };
    }, []);


    return(
        <div className="primary-counter-container">
            <div className="row d-flex">
                {contentDetail && contentDetail.map((item,index)=>{
                    return(
                        <div key={index} className="col-12 col-sm-6 col-md-3">
                            <div>{item.timer}</div>
                            <p>{item.content.toUpperCase()}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CounterSection