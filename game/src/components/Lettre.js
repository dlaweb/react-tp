import React from 'react';

class Lettre extends React.Component
{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        const {lettres} = this.props
        return(
            <div>
                {lettres.map((lettre) => 
                    <button key={lettre} onClick={() => this.props.match(lettre)}>{lettre}</button>
                    )
                }
            </div>

        );
    }
}

export default Lettre