import React, { useState } from 'react';
import './Style/HorizontalCards.css';
import Card from './Components/Card';

var hidPrevIndex = 0;  //THIS INDEX VAR POINT ON `.hiddenPrev` ELEMENT

function InitList (dataList, color1, color2, color3, bgColor){
  const serviceList = [];
  let index = 0;
  while(serviceList.length<6){
    // eslint-disable-next-line
    dataList.forEach((service)=>{
      serviceList.push(
        <li key={index}
          className={(index===0)?"hiddenPrev":
          (index===1)?"prevCard":
          (index===2)?"mainCard":
          (index===3)?"nextCard":
          (index===4)?"hiddenNext":"hiddenCard"}
        >
          <Card 
            title={service.title}
            description={service.description}
            background={bgColor}
            color1={color1}
            color2={color2}
            color3={color3}
          />
        </li>
      );
      index++;
    });
  }
  return serviceList;
}

function HorizontalCards(props) {
  // props : {data, titleColor, descriptionColor, lineColor, backgroundColor}

  const data = ((props.data===undefined)?[
    {title: "Item1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ..."},
    {title: "Item2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
  ]:props.data);

  const cardColor = ((props.bgColor===undefined)?'#333C4A':props.bgColor);
  const lineColor = ((props.lineColor===undefined)?'#808080':props.lineColor);
  const primaryColor = ((props.titleColor===undefined)?'#FFFFFF':props.titleColor);
  const describeColor = ((props.descriptionColor===undefined)?'white':props.descriptionColor);
  
  const [servList, setServList] = useState(InitList(data, primaryColor, lineColor, describeColor, cardColor));

  const handleChange = (hpIndex) => {
    const newServList = servList.slice();
    servList.forEach((service, key)=>{
      if(key===(hidPrevIndex)%servList.length){
        newServList[key] = <li key={key} className="hiddenPrev">{service.props.children}</li>;
        setServList(newServList);
      }else if(key===(hidPrevIndex+1)%servList.length){
        newServList[key] = <li key={key} className="prevCard">{service.props.children}</li>;
        setServList(newServList);
      }else if(key===(hidPrevIndex+2)%servList.length){
        newServList[key] = <li key={key} className="mainCard">{service.props.children}</li>;
        setServList(newServList);
      }else if(key===(hidPrevIndex+3)%servList.length){
        newServList[key] = <li key={key} className="nextCard">{service.props.children}</li>;
        setServList(newServList);
      }else if(key===(hidPrevIndex+4)%servList.length){
        newServList[key] = <li key={key} className="hiddenNext">{service.props.children}</li>;
        setServList(newServList);
      }else{
        newServList[key] = <li key={key} className="hiddenCard">{service.props.children}</li>;
        setServList(newServList);
      }
    })
  }
  
  const handlePrev = () => {
    (hidPrevIndex===0)?hidPrevIndex=servList.length-1:hidPrevIndex--;
    handleChange(hidPrevIndex);
  }
  
  const handleNext = () => {
    (hidPrevIndex===servList.length-1)?hidPrevIndex=0:hidPrevIndex++;
    handleChange(hidPrevIndex);
  }
  

  return (
    <div className="HorizontalCards" id="HorizontalCards">
        <button style={{color:cardColor}} onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false" height="1em" viewBox="0 0 320 512">
            <path style={{fill:'currentcolor'}}
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </button>
        <ul 
          style={{listStyle:'none', margin:'0', padding:'0'}} 
          className='CardsContainer'>
          {servList}
        </ul>
        <button style={{color:cardColor}} onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false" height="1em" viewBox="0 0 320 512">
            <path style={{fill:'currentcolor'}}
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
          </svg>
        </button>
    </div>
  );
}

export default HorizontalCards;
