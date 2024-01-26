import React from 'react';

function Card(props) {
    return (
        <div
          className={'Card '+((props.className===undefined)?'':props.className)}
          style={{
            backgroundColor: (props.background===undefined)?'gray':props.background,
            boxShadow: "0 0 10px -6px black" 
        }}>
            <h1
              style={{
                color:(props.color1===undefined)?'white':props.color1,
            }}>
                {props.title}
            </h1>
            <div style={{
                backgroundColor:(props.color2===undefined)?'white':props.color2,
                height:'2px', width:"80%",
                borderRadius:'99999px',
                marginBottom:'20px',
                marginTop:'20px',
            }}></div>
            <p 
              style={{
                color:(props.color3===undefined)?'white':props.color3,
            }}>
                {props.description}
            </p>
        </div>
    );
}

export default Card;