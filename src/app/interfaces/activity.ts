import { IPhase } from "./phase";
import { IDimension } from "./dimension";
import { IActivityType } from "./activity-type";

export interface IActivity {
    id?: string;
    phase?: IPhase;
    dimension?: IDimension;
    activity_type?: IActivityType;
}
