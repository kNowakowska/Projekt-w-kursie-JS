class Wallet{
    constructor(money){
        let _money=money;
        this.getWalletValue=function(){
            return _money;
        }
        this.checkCanPlay=function(stake){
            if(_money>=stake) return true;
            else return false;
        }
        this.changeWallet =function(value,operation=true){
            if(operation){
                return _money+=value;
            }else{
                return _money-=value;
            }
        }
        // this.changeWallet = (value, type = "+") => {
        //     if (typeof value === "number" && !isNaN(value)) {
        //      if (type === "+") {
        //       return _money += value;
        //      } else if (type === "-") {
        //       return _money -= value;
        //      } else {
        //       throw new Error("nieprawidłowy typ działania");
        //      }
         
        //     } else {
        //      console.log(typeof value);
        //      throw new Error("nieprawdidłowa liczba")
        //     }
        //    }
         

    }
    
}