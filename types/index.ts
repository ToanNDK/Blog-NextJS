export interface blogType {
    id: string
    title:string
    summary:string
    description : string
    thumbnail: string
    created_at:string
    category:{
        id:string,
        name:string
    }
    user: {
        avatar: string
        first_name: string
        last_name: string
    }
}