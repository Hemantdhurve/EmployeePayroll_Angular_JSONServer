export type IaddEmployee={
    name: string,
    profileImage: string,
    department: string,
    gender:string,
    salary: string,
    date: string,
    inputnotes: string,

}
export type IdeleteEmployee={
    id:Number,
    // name: string,
    // profileImage: string,
    // department: string,
    // gender:string,
    // salary: string,
    // date: string,
    // inputnotes: string,
}
export interface IupdateEmployee{
    id:Number,
    name: string,
    profileImage: string,
    department: string,
    gender:string,
    salary: string,
    date: string,
    inputnotes: string
}
