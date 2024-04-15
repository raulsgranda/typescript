

export interface Passenger{
    name:string;
    children?:string[];

}
const passenger1:Passenger={
    name:'Raul',

}


const passenger2:Passenger={
    name:'Covi',
    children:['Edu','Mar']
}

const printChildren= (passenger:Passenger)=> {
    const howManyChildren=passenger.children?.length||0;
    console.log(passenger.name,howManyChildren);

} 
printChildren(passenger2);