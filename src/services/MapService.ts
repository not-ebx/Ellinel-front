import { MapName, MSMap } from "../models/Map";
import { requestBuilder } from "./Utils";

class MobService {
  private baseUrl = "https://maplestory.io/api/GMS/83/map";

  searchMap(name: string){
    return requestBuilder<MapName>('GET', `${this.baseUrl}?searchFor=${name}`);
  }

  getMapData(mapId: string | number){
    return requestBuilder<MSMap>('GET', `${this.baseUrl}/${mapId}`);
  }

  getMapDataFromArray(mapIds: (string | number)[]){
    return Promise.all(
      mapIds.map(id => requestBuilder<MSMap>('GET', `${this.baseUrl}/${id}`))
    );
  }

}

const singleton = new MobService();
export default singleton as MobService;

