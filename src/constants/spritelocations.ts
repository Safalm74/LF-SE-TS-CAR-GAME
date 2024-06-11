
type spriteInstance={
    x:number;
    y:number;
    width:number;
    height:number;
}
type SpriteLocation={
    police: spriteInstance,
    van:spriteInstance
}
const spritelocations:SpriteLocation={
    police:{//width=56,height=159
        x:382,
        y:30,
        width:56,
        height:159
    },
    van:{//width=67,height=160
        x:60,
        y:30,
        width:67,
        height:160
    }

}

export default spritelocations;