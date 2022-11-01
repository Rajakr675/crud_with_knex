// This file first of all require conection file.


const knex = require('./conection_knex');
let input=require("prompt-sync")();

async function insert_table(){
    let fname=input("enter the name     => ");
    let lname=input("enter the last name=> ");
    let Joining_date=input("enter the joining_date =>");
    let email=input("enter the email    => ");
    await knex("Persons").insert({fname:`${fname}`,lname:`${lname}`,Joining_date:`${Joining_date}`,email:`${email}`})
    console.log("your data is inserted succesfully");

}
async function read_table(){
    console.log("!--> what you want here<--! \npress 1).for all data show\npress 2).for specific data show");
    let choice=input("enter your choice => ")
    if(choice=="1"){
        // let res=await knex("Persons").where("Persons");
        // console.log(res);
        // processs....................

    }else{
        let email=input("enter the email => ");
        let res=await knex("Persons").where({email:`${email}`})
        console.log(res);
        
        
    }

}

async function update_table(){
    console.log("what do you want to update:\npress 1).for fname\npress 2).for lname\npress 3).for Joining_date\npress 4).for email");
    let choice=input("enter the choice => ")
    if(choice=="1"){
        let id=input("enter which id you want to update => ");
        let new_name=input("enter the new name => ");
        await knex('Persons')
        .where({ id:`${id}` })
        .update({ fname: `${new_name}` })
        console.log("update is succesfully");
    }else if(choice=="2"){
        let id=input("enter which id you want to update => ");
        let new_lname=input("enter the new lname => ");
        await knex("Persons").where({id:`${id}`}).update({lname:`${new_lname}`});
        console.log("update is succesfully");
    }else if(choice=="3"){
        let id=input("enter which id you want to update => ");
        let new_date=input("enter the new date => ");
        await knex("Persons").where({id:`${id}`}).update({Joining_date:`${new_date}`});
        console.log("update is succesfully");
        
    }else if(choice=="4"){
        let id=input("enter which id you want to update => ");
        let email=input("enter the new mail => ")
        await knex("Persons").where({id:`${id}`}).update({email:`${email}`});
        console.log("update is succesfully");
    }
}

async function delete_table(){
    let id=input("enter which id you want to update => ");
    await knex('Persons').where({ id:`${id}` }).del()
    console.log("deleted succesfully. ");
}

console.log("press 1).for insert_table  \npress 2).for read_table \npress 3).for update_table.\npree 4).for deleted\n ");
const start= async()=>{
    let choice=input("Enter your choice => ");
    if(choice=="1"){
        await insert_table()
    }
    else if(choice=="2"){
        await read_table()
    }
    else if(choice=="3"){
        await update_table()
    }
    else if(choice=="4"){
        await delete_table()  
    }
}
start()

