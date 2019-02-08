import React from 'react';

class Mot extends React.Component
{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        const {mot} = this.props
        return(
            <div>
                {this.props.affichageMot(this.props.phrase, this.props.usedLetters)}
            </div>

        );
    }
}

export default Mot