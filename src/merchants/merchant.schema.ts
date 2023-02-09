import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MerchantsDocument = HydratedDocument<Merchants>;

@Schema()
export class Merchants {
  @Prop()
  archived?: boolean;
  @Prop()
  id?: string;
  @Prop()
  userName?: string;
  @Prop()
  email?: string;
  @Prop()
  number?: number;
  @Prop()
  contactName?: string;
  @Prop()
  contactEmail?: string;
  @Prop()
  contactPhoneNumber?: number;
  @Prop()
  type?: string;
  @Prop()
  percent?: number;
  @Prop()
  dateInput?: Date;
  @Prop()
  payments?: string;
  @Prop()
  notesInput?: string;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchants);
