export type PaymentMethod = "credit_card" | "pix";

export type PaymentFormData = CreditCardPayment | PixPayment;

interface CardDetails {
  number: string;
  holderName: string;
  expiry: string; // "MM/YY"
  cvv: string;
}

interface CreditCardPayment {
  method: "credit_card";
  cardDetails: CardDetails;
  saveCard?: boolean;
}

interface PixPayment {
  method: "pix";
  pixKey: string;
  keyType: "cpf" | "cnpj" | "email" | "phone" | "random";
}
