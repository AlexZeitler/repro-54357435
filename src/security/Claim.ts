import {IClaim} from "./IClaim";

export class Claim implements IClaim {
    type: string;
    value: string;

    constructor(type: string, value: string) {
        this.type = type;
        this.value = value;
    }
}
