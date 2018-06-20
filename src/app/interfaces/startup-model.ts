import { IStartup } from './startup';
import { IActionPlan } from './action-plan';
export interface IStartupModel {
    id?: string;
    is_done?: boolean;
    is_required?: boolean;
    priority?: number;
    foreseen_date?: string;
    accomplished_date?: string;
    realization_place?: string;
    pct_cost?: number;
    startup_cost?: number;
    note?: string;
    actionPlanId?: string;
    startupId?: string;
    actionPlan?: IActionPlan;
    startup?: IStartup;
}
