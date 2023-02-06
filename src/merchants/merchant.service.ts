import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant, merchantsData } from './merchant.constant';
import { Merchants, MerchantsDocument } from './merchant.schema';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel(Merchants.name)
    private merchantModel: Model<MerchantsDocument>,
  ) {}
  async createMerchant(merchantData: Merchant): Promise<Merchant> {
    const idUpdatedMerchantData = {
      ...merchantData,
      // id: Math.random() * 5,
      archived: false,
    };
    // merchantsData?.push(idUpdatedMerchantData);
    console.log(merchantsData);
    const createdMerchant = await this.merchantModel.create(
      idUpdatedMerchantData,
    );
    // console.log(createdMerchant);

    return createdMerchant;
  }

  async getAllMerchants(): Promise<Merchant[]> {
    const getMerchantData = merchantsData.filter(
      (merchant) => merchant.archived == false,
    );
    const find = await this.merchantModel.find({ getMerchantData }).exec();
    console.log(find, 'find');
    return find;
  }

  async getMerchantById(id: number) {
    const editMerchantData = merchantsData.find(
      (merchant) => merchant?.id == id,
    );

    return editMerchantData;
  }
  updateMerchant(formValues, id) {
    const oldMerchantDataRemovedList = merchantsData.filter(
      (merchant) => merchant?.id != id,
    );
    oldMerchantDataRemovedList.push(formValues);
    return formValues;
  }

  deleteMerchant(id: number) {
    const deleteMerchantData = merchantsData.find(
      (merchant) => merchant?.id == id,
    );
    if (deleteMerchantData) {
      deleteMerchantData.archived = true;
    }
    const deletedMerchantData = merchantsData.filter(
      (merchant) => merchant.archived == false,
    );

    // console.log('deleteData', deletedMerchantData);
    return deletedMerchantData;
  }
}
