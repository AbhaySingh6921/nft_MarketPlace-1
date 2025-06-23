export const getTopCreators=(creators)=>{
const finalCreators=[];

    const finalResults = creators.reduce((index, currentValue) => {
    const seller = currentValue.seller;

    // If this seller hasn't been seen before, create a new array
    if (!index[seller]) {
        index[seller] = [];
    }

    // Add the current creator to the seller's array
    index[seller].push(currentValue);

    return index;
}, {});//here {} are intaial vlaue of index
    // Object.entries ->turn object into array of[key,value] like ['0xA', [array of items]]
    Object.entries(finalResults).forEach((item)=>{
        const seller=item[0];
        const total=item[1].map((newItem)=>Number(newItem.price))
        .reduce((previousValue,currentValue)=>previousValue+currentValue,0)

        finalCreators.push({seller,total});
    })
    return finalCreators;
}