import { Injectable } from '@nestjs/common';
import { Merchant, merchantsData } from './merchant.constant';
@Injectable()
export class MerchantService {

  createMerchant(merchantData:Merchant):Merchant {
const idUpdatedMerchantData={...merchantData,id:Math.random()}
      merchantsData?.push(idUpdatedMerchantData);
    // console.log(merchantsData);
    return idUpdatedMerchantData;
  }
  getAllMerchants():Merchant[]{
    return merchantsData;
  }

}
