import { Injectable } from '@nestjs/common';
import { Merchant, merchantsData } from './merchant.constant';
@Injectable()
export class MerchantService {
  createMerchant(merchantData: Merchant): Merchant {
    const idUpdatedMerchantData = {
      ...merchantData,
      id: Math.random() * 5,
      archived: false,
    };
    merchantsData?.push(idUpdatedMerchantData);
    console.log(merchantsData);
    return idUpdatedMerchantData;
  }

  getAllMerchants(): Merchant[] {
    const getMerchantData = merchantsData.filter(
      (merchant) => merchant.archived == false,
    );
    return getMerchantData;
  }

  updateMerchant(id: number) {
    const editMerchantData = merchantsData.find(
      (merchant) => merchant?.id == id,
    );

    return editMerchantData;
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
    console.log('deleteData', deletedMerchantData);
    return deletedMerchantData;
  }
}
