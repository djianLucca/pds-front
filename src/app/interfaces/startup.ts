import { IPerson } from './person';
import { IPct } from './pct';
import { IArea } from './area';
export interface IStartup {
    id?: string;
    name?: string;
    pct?: IPct;
    person?: IPerson;
    area?: IArea;
    pctId?: string;
    personId?: string;
    areaId?: string;
    hasModel?: boolean;
}
