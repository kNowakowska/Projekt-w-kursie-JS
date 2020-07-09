class Wallet{
    constructor(money=100){
        let _money=money;
        this.getWalletValue=function(){
            return _money;
        }
        this.checkCanPlay=function(stake){
            if(_money>=stake) return true;
            else return false;
        }
        this.changeWallet =function(value,win){
            if(win){
                return _money+=value;
            }else{
                return _money-=value;
            }
        }
    }
    
}