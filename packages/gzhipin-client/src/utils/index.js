
export function getRedirectTo(type, header){
    let path=''
    console.log(type)
    if(type==='laoban'){
        path='/laoban'
    }else{
        path='/dashen'
    }

    if(!header){
        path+='Info'

    }
    return path
}