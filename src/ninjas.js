import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        const Array = this.props.ninjasArray;
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
    }

}

export default Ninjas;