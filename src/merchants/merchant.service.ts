import { Injectable } from '@nestjs/common';
import { Merchant, merchantsData } from './merchant.constant';
@Injectable()
export class MerchantService {
  createMerchant(merchantData: Merchant): Merchant {
    const idUpdatedMerchantData = { ...merchantData, id: Math.random() * 5 };
    merchantsData?.push(idUpdatedMerchantData);
    console.log(merchantsData);
    return idUpdatedMerchantData;
  }

  getAllMerchants(): Merchant[] {
    return merchantsData;
  }

  updateMerchant(id: number) {
  //   for (let i = 0; i < merchantsData.length; i++) {
  //     if (merchantsData[i].id === id) {
  //       merchantsData[i] = { ...merchantsData[i], ...updatedMerchantData };

  //       return merchantsData[i];
  //     }
  //   }
  //   return null;
  // }
  const editMerchantData=merchantsData.find((merchant)=>merchant?.id===id)
  return editMerchantData
}
}
