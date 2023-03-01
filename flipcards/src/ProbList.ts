export default class ProbList<T>{
    private totalVal: number = 0;

    private vals: ProbValue<T>[] = [];

    public getRand(): T{
        let subt = 0;
        let rNum = Math.random() * this.totalVal;
        for(const v of this.vals){
            subt += v.Weight;
            if(subt >= rNum){
                return v.Value;
            }
        }
    }

    public getItem(val: T){
       return this.vals[this.vals.findIndex((v2) => { return v2.Value === val; } )]
    }

    public push(val: T, w: number){
        this.vals.push(new ProbValue<T>((change: number) => {this.totalVal += change;
            console.log("Changed total by " + change)}, val, w))
    }


    public remove(val: T){
        const index = this.vals.findIndex((v2) => { return v2.Value ===  val; } )
        this.totalVal -= this.vals[index].Weight
        this.vals.splice(index, 1)
    }

    
    
}


class ProbValue<T>{
    private _weight: number = 0;
    private WeightChangedCallback: (change: number) => void;
    public Value: T;

    public get Weight() : number{
        
        return this._weight;
    }

    public set Weight(val: number){
        if(val<= 0){
            throw Error("Weight of an element can never be smaller or equal to 0");
        }
        this.WeightChangedCallback(val-this.Weight);
        this._weight = val;
    }

    constructor(callback: (change: number) => void, val: T, weight: number = 1){
        this.WeightChangedCallback = callback;
        this.Value = val;
        this.Weight = weight;
    }
}