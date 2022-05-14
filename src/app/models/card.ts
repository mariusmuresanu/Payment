export class Card{
    cardholderName: string;
    cardNumber: string;
    cardExpDate: string;
    cardCvc: number;
    cardPrimary: boolean;

    constructor(cardholderName: string, cardNumber: string, cardExpDate: string, cardCvc: number, cardPrimary: boolean){
        this.cardholderName = cardholderName;
        this.cardNumber = cardNumber;
        this.cardExpDate = cardExpDate;
        this.cardCvc = cardCvc,
        this.cardPrimary = cardPrimary;
    }
}