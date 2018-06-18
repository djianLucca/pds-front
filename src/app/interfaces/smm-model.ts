import { IActivity } from './activity';
import { IPct } from './pct';
export interface ISmmModel {
    id?: string;
    name?: string;
    pctId?: string;
    pct?: IPct;
    activities?: IActivity[];
    activitiesIds?: string[];
}
