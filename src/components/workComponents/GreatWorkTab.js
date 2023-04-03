
import { Tabs, Tab } from "react-bootstrap"


const GreatWorkTab = () =>{

    const tabsAllContent = [
        {
            src: '/images/work-tab-branding-01.jpg',
            content: 'branding'
        },
        {
            src: '/images/work-tab-design-01.jpg',
            content: 'design'
        },
        {
            src: '/images/work-tab-photo-01.jpg',
            content: 'photo'
        },
        {
            src: '/images/work-tab-coffee-01.jpg',
            content: 'coffee'
        },
        {
            src: '/images/work-tab-coffee-02.jpg',
            content: 'coffee'
        },
        {
            src: '/images/work-tab-photo-02.jpg',
            content: 'photo'
        },
        {
            src: '/images/work-tab-design-02.jpg',
            content: 'design'
        },
        {
            src: '/images/work-tab-branding-02.jpg',
            content: 'branding'
        },
    ]

    const tabShowPicture = (item, item2)=>{
        return(
            <div className="row tabshowpic-container">
                <div className="col-12 col-md-6"><img src={item.src} alt={item.content}/></div>
                <div className="col-12 col-md-6"><img src={item2.src} alt={item2.content}/></div>
            </div>
        )
    }
    
    const tabsDetail = [
        {
            title:'all',
            eventKey: 'all',
            content: ()=>{return(
                <div className="tab-all-container">
                    <div className="row">
                        {tabsAllContent.map((item,index)=>{
                            return(
                                <div key={index} className="col-12 col-sm-6 col-lg-3 tab-slide-up" >
                                    <div key={index}><img src={item.src} alt={item.content}/></div>
                                    <div><span>{item.content.toUpperCase()}</span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        },
        {
            title:'branding',
            eventKey: 'branding',
            content: ()=>tabShowPicture(tabsAllContent[0], tabsAllContent[7])
        },
        {
            title:'design',
            eventKey: 'design',
            content: ()=>tabShowPicture(tabsAllContent[6], tabsAllContent[1])
        },
        {
            title:'photo',
            eventKey: 'photo',
            content: ()=>tabShowPicture(tabsAllContent[5],tabsAllContent[2])
        },
        {
            title:'coffee',
            eventKey: 'coffee',
            content: ()=>tabShowPicture(tabsAllContent[4], tabsAllContent[3])
        }
    ]

    return(
        <div className="primary-greatWorkTab-container">
            <div className="row">
                <div className="col-12 text-center">
                    <h4>GREAT WORK<span className="orangeFont">.</span></h4>
                </div>

                <Tabs
                    defaultActiveKey="all"
                    id="uncontrolled-tab-example"
                    className="tabs-container"
                    justify
                >
                    {tabsDetail && tabsDetail.map((item,index)=>{
                        return(
                            <Tab tabClassName="tab-item-list" key={index} title={item.title.toUpperCase()} eventKey={item.eventKey} >
                                {item.content()}
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}

export default GreatWorkTab