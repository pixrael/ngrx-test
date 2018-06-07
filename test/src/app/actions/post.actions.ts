import { Action } from '@ngrx/store';


export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] UpVote';
export const DOWNVOTE = '[POST] DownVotet';
export const RESET = '[POST] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: string) { }
}

export class UpVote implements Action {
    readonly type = UPVOTE;
}

export class DownVote implements Action {
    readonly type = DOWNVOTE;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All = EditText | UpVote | DownVote | Reset;