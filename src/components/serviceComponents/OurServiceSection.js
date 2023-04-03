import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"

const OurServiceSection = () =>{

    const cardDetail = [
        {
            icon:faPenToSquare,
            title:'Web Design',
            content: `Maecenas tempus. tellus edget condimentum rhoncus. sem quam semper libero. sit amet adipiscing sem.`
        },
        {
            icon:faGear,
            title:'Development',
            content: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero`
        },
        {
            icon:faApple,
            title:'branding',
            content: `Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
        },
        {
            icon:faPenToSquare,
            title:'photography',
            content: `Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words`
        },
        {
            icon:faGear,
            title:'ui design',
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC`
        },
        {
            icon:faApple,
            title:'Web Design',
            content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`
        }
    ]

    return(
        <div className="primary-ourService-container" id="ourService">
            <div className="row">
                <div className="col-12">
                    <h4>SERVICES<span className="orangeFont">.</span></h4>
                </div>
                
                {cardDetail && cardDetail.map((item,index)=>{
                    return(
                        <div key={index} className="col-12 col-sm-6 col-lg-4 ">
                            <div className="service-card-container">
                                <div className="row">
                                    <div className="col-12"><FontAwesomeIcon icon={item.icon} /></div>
                                    <div className="col-12"><h5>{item.title.toUpperCase()}</h5></div>
                                    <div className="col-12"><p>{item.content}</p></div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default OurServiceSection