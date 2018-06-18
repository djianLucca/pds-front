import { IActivity } from './activity';
import { ISmmModel } from './smm-model';

export interface IActionPlan {
        id?: string,
        activityId?: string,
        smmModelId?: string,
        smm_model?: ISmmModel,
        activity?: IActivity
}