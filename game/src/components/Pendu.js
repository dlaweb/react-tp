import React from 'react';
import Lettre from '../components/Lettre';
import Mot from '../components/Mot';

const mots = [
    'banane',
    'sandwich',
    'badoit',
    'wolowitz',
    'cigare',
    'pizza'
]

class Pendu extends React.Component
{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            lettres : [
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
            ],
            essai: 0,
            // return un mot au hasard
            phrase: this.random(),
            // tableau de lettre selectione
            usedLetters: new Set(),
            // mot à découvrir
            discover: [],
            // le mot en cours de découverte
            encours: [],
            // essayer
            try:[]
        }
        this.match = this.match.bind(this)
    }

    match(lettre)
    {
        // Je push chaque lettre cliqué dans un tableau try
        this.setState({ try: [...this.state.try, lettre ] })
        
        // Je check dans le tableau de lettre cliqué sur j'ai une correspondance avec include
        // Mais j'ai pas eu le temps de faire la suite donc voilà :)
        this.state.try.map(() => { 
            if (this.state.phrase.includes(lettre))
            {
                console.log("success")
            }
        })
    }

    affichageMot(phrase, usedLetters) {
        return phrase.replace(
        /\w/g,
        letter => (usedLetters.has(letter) ? letter : '_')
        )
    }

    random()
    {
        var mot = mots[Math.floor(Math.random()*mots.length)];
        return mot
    }

    render(){
        console.log(this.state.phrase)
        const {lettres} = this.state
        return(
            <div class="ensemble">
                <div class="compteur"></div>
                <div class="alphabet">
                    <Lettre lettres={lettres} match={this.match}/>
                </div>
                <div class="form">
                    <input type="name" />
                <p>
                    {this.affichageMot(this.state.phrase, this.state.usedLetters)}
                </p>
                </div>    
            </div>

        );
    }
}

export default Pendu