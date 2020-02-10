export function  isExist(array:Array<string|number>,item:string|number){
    return array.indexOf(item)>=0;
}

export function  isNotExist(array:Array<string|number>,item:string|number){
    return !isExist(array,item);
}
export function removeElem(array:any[],item:any){
    let itemIndex = array.indexOf(item);
    if(itemIndex!==-1){
        array.splice(itemIndex);
    }
}