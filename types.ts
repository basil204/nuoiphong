export interface Donor {
  id: number;
  name: string;
  amount: number;
  message: string;
}

export interface PoemLine {
  han: string;
  phienAm: string;
  dienNghia: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  status: string;
  description: string;
  hungerLevel: number; // 0-100
  bankName: string;
  bankCode: string; // used for VietQR image
  accountNumber: string;
  accountHolder: string;
}