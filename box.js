class Box {
    constructor (x,y,width,height){
        options={
            'restitutuion':1,
            'friction':2
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }

}