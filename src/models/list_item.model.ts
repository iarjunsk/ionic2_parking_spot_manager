export class ListItem {

    slot_no : number;
    color_val : string;
    reg_no : string;

    constructor( s: number,  c: string,  r: string){
        this.slot_no = s;
        this.color_val = c;
        this.reg_no = r;
    }

    setSlotNo(s : number){
        this.slot_no = s;
    }
    setColor(c : string){
        this.color_val = c;
    }
    setRegistration(r : string){
        this.reg_no = r;
    }

    getSlotNo() : number{
       return this.slot_no;
    }
    getColor() : string{
        return this.color_val;
    }
    getRegistration() : string{
        return this.reg_no;
    }


}