import React from 'react';

const Ninjas = (props) => {
    const Array = props.ninjasArray;
    const ninjaList = Array.map( element => {
        return (
            <div className="ninja" key="Array.id">
                <div>Name: { element.name }</div>
                <div>Age: { element.age }</div>
                <div>Belt: { element.belt }</div>
            </div>
            );
        });
    return (
        <div className = "ninjaList">
            { ninjaList }
        </div>)  
};

export default Ninjas;