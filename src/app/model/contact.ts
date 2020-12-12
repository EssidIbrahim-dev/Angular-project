export class Contact {
  name: string;
  email: string;
  information: {
    cardType: string;
    cardNumber: number;
    date: Date;
    code: number;
  };
}
