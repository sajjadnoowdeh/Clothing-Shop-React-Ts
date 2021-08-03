export interface IProduct{
    id:number
    name:string
    size:string
    type:string
    price:number
    discount?:number
    img:string
    subImg:string
}

export interface IData{
    amazing:IProduct[]
}
