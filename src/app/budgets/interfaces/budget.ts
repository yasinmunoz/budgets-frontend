export interface Budget {
    id: number;
    user_id: number;
    project_id: number;
    state_id: number;
    name: string;
    description: string;
    requested_by: string;
    total_in_hours: string;
    total: string;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    state: State;
    lines: Line[];
  }
  
  export interface Line {
    id: number;
    budget_id: number;
    state_id: number;
    name: string;
    description: string;
    quantity: string;
    cost_per_hour: string;
    total: string;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
  }
  
  export interface State {
    id: number;
    classname?: any;
    code: string;
    name: string;
    parent_id?: any;
    extra?: any;
    order?: any;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
  }