export const merchantsData: Merchant[] = [];
export interface Merchant {
  archived?: boolean;
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
