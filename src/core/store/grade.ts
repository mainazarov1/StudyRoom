import { makeAutoObservable } from 'mobx';
type IValue = number | null;

class GradeStore {
    value: IValue = 0;
    editing = false;
    constructor() {
        makeAutoObservable(this);
    }

    setValue = (value: IValue) => {
        this.value = value;
    }

    setEditing = (editing: boolean) => {
        this.editing = editing;
    }
}

export const gradeStore = new GradeStore();