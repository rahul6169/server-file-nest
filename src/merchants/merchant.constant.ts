export const merchantsData: Merchant[] = [];
export interface Merchant {
  id?: number;
  userName?: string;
  email?: string;
  number?: number;
  contactName?: string;
  contactEmail?: string;
  contactPhoneNumber?: number;
  type?: string;
  percent?: number;
  dateInput?: Date;
  payments?: string;
  notesInput?: string;
}
