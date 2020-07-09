class Draw{
    constructor(){
        this.options=['#25F24E', 'royalblue', '#F24E25'];
        let _result = this.drawResult();
        this.getDrawResult = ()=>  _result;
    }
    drawResult(){
        let colors=[];
        for(let i=0; i<this.options.length; i++){
            const index = Math.floor(Math.random()*this.options.length);
            colors.push(this.options[index]);
            
        }
        return colors;
    }
}