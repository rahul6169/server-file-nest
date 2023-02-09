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
    const find = await this.merchantModel.find({ archived: false }).exec();
    // console.log(find, 'find');
    return find;
  }

  async getMerchantById(_id: string) {
    // const editMerchantData = merchantsData.find(
    //   (merchant) => merchant?.id == id,
    // );
    const editMerchantData = await this.merchantModel.findOne({ _id });
    console.log(editMerchantData);

    return editMerchantData;
  }
  async updateMerchant(formValues, _id) {
    // const oldMerchantDataRemovedList = merchantsData.filter(
    //   (merchant) => merchant?.id != id,
    // );
    const oldMerchantDataRemovedList =
      await this.merchantModel.findOneAndUpdate({ _id }, formValues, {
        new: true,
      });
    // oldMerchantDataRemovedList.push(formValues);
    return oldMerchantDataRemovedList;
  }

  // async deleteMerchant(_id: string) {
  // const deleteMerchantData = merchantsData.find(
  //   (merchant) => merchant?.id == id,
  // );
  // if (deleteMerchantData) {
  //   deleteMerchantData.archived = true;
  // }
  // const deletedMerchantData = merchantsData.filter(
  //   (merchant) => merchant.archived == false,
  // );

  // const deletedData = await this.merchantModel.deleteOne(
  //   { _id },
  //   { archived: true },
  // );
  async deleteMerchant(_id: string) {
    const deletedData = await this.merchantModel.findOneAndUpdate(
      { _id },
      { archived: true },
      { new: true },
    );
    return deletedData;
  }
  //   return { archived: false };
  // }
}
