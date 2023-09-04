export const getFormattedBlogCategory = (arr,key1,key2) => {
    let formattedArray = [];

    arr.map((item)=> {
        let obj = {
            label: item[key1],
            value: item[key2]
        }
        formattedArray.push(obj);
    })

    return formattedArray
}