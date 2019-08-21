class Card {
    constructor(value, suit, thrown = false){
        this.Value = value
        this.Suit = suit
        this.Thrown = thrown
    }
}

class Deck {
    constructor(){
        this.deck = []
        
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        this.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    }

    buildDeck(){
        for(let suit in this.suits){
            for(let value in this.values){
                this.deck.push(new Card(this.values[value], this.suits[suit]))
            }
        }
    }

    printCard(n){
        return console.log("Value: " + this.deck[n].Value + " | Suit: " + this.deck[n].Suit + " | isThrown? " + this.deck[n].Thrown)        
    }

    printDeck(){
        return console.log(this.deck)
    }

    getValue(n){
        return this.deck[n].Value
    }

    getSuit(n){
        return this.deck[n].Suit
    }

    isThrown(n){
        return this.deck[n].Thrown
    }

    shuffleCards(){
        const deck = this.deck
        let size = deck.length
        let i

        while(size){
            i = Math.floor(Math.random() * size--);

            [deck[size], deck[i]] = [deck[i], deck[size]]
        }
        
        return this
    }

    getLast(){
        let length = this.deck.length
        let i = 1
        do{
            var last = length-i
            i++
        } while(this.deck[last].Thrown == true)
        return last;
    }

    dealOne(){
        let last = this.getLast()
        this.deck[last].Thrown = true
        return console.log("You Got: " + this.deck[last].Value + " Of " + this.deck[last].Suit)
    }

    deal(){
        this.dealOne();
        this.dealOne();
        this.dealOne();
    }

    getTop(){
        let top = this.getLast()
        return console.log("The Top Card Value is " + this.deck[top].Value + " Of " + this.deck[top].Suit)
    }

    getBottom(){
        return console.log("The Bottom Card Value is " + this.deck[0].Value + " Of " + this.deck[0].Suit)
    }

    getNonThrown(){
        var occurrence=0;
        for (let i = 0; i < this.deck.length; i++) {
            if(this.deck[i].Thrown == false){
                occurrence++
            }
        }
        return console.log("Remains " + occurrence + " non thrown cards")
    }
}
