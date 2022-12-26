export interface UserInterface {
    id:number
    name? : string
    username : string
    email : string
    website : string
    address : {
        street : string
        suite : string
        city : string
        zipcode : string
        geo:{
            lat : string
            lng : string
        }

    }
}

export interface AlbumInterface{
    userId : number
    id : number
    title : string
    albumId :number
}

export interface PostInterface{
    userId : number
    id : number
    title : string
    body : string

}


export interface  CommentsInterface{
postId:number
    id:number
    name:string
    email:string
    body:string
}