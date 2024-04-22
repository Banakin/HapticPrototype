export abstract class Habit {
    _name: string;
    _statistics;

    constructor(name: string) {
        this._name = name;
        this._statistics = 0;
    }

    get statistics() {
        return this._statistics;
    }

    // Getters and setters
    abstract get data(): unknown;
    abstract set data(data: unknown);
}

export class YesNoHabit extends Habit {
    _value: boolean | undefined = undefined;

    get data(): boolean | undefined {
        return this._value;
    }

    set data(data: boolean) {
        if (data) this._statistics = 100;
        else this._statistics = 0;

        this._value = data;
    }
}
