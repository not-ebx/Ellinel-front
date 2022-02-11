import { APIMob, APIMobSearchResult } from "../models/Mob";
import { requestBuilder } from "./Utils";

class MobService {
  private baseUrl = "https://maplestory.io/api/GMS/83/mob";

  searchMob(name: string){
    return requestBuilder<APIMobSearchResult>('GET', `${this.baseUrl}?searchFor=${name}`);
  }

  getMobData(mobId: string | number){
    return requestBuilder<APIMob>('GET', `${this.baseUrl}/${mobId}`);
  }

}

const singleton = new MobService();
export default singleton as MobService;

