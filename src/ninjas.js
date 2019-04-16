import React from 'react';

const Ninjas = (props) => {
    const Array = props.ninjasArray;
    const ninjaList = Array.map( element => {
        return ( element.age > 20 ? (
            <div className="ninja" key= {element.id} >
                <div>Name: { element.name }</div>
                <div>Age: { element.age }</div>
                <div>Belt: { element.belt }</div>
            </div>
            ): null);
        });
    return (
        <div className = "ninjaList">
            { ninjaList }
        </div>)  
};

export default Ninjas;