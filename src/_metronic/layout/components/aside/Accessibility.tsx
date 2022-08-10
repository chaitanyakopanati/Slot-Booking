const Access:{[key:number]:any}={    
    1:{ 
        complaints:true,
        customers:true,
        forms:true,
        installations:true,
        inquiries:true,
        stocks:true,
        master:true,
        download:true,
        allAccess:true
    },
    2:
    {
        complaints:false,
        customers:true,
        forms:true,
        installations:false,
        inquiries:false,
        stocks:false,
        master:false,
        actions:["view",]
    },
    3:{ 
        complaints:true,
        customers:true,
        forms:false,
        installations:true,
        inquiries:true,
        stocks:false,
        master:false
    }, 4:{ 
        complaints:true,
        customers:true,
        forms:true,
        installations:true,
        inquiries:true,
        stocks:true,
        master:false
    },
    5:{ 
        complaints:false,
        customers:true,
        forms:false,
        installations:false,
        inquiries:true,
        stocks:false,
        master:false
    },
    6:{ 
        complaints:false,
        customers:false,
        forms:false,
        installations:false,
        inquiries:false,
        stocks:true,
        master:false
    },
    7:{
        complaints:true,
        customers:false,
        forms:false,
        installations:true,
        inquiries:false,
        stocks:false,
        master:false,
        installationrights:["view","edit"]
    }
    
}
// export default Access;
// const Access:{[key:string]:any}=
//              {
//                 complaints:{
//                              roles:140|2
//                             },
//                 customers:{
//                             roles:140|2
//                           },
//                 forms:{ roles:140||2 },
//                 installations:{ roles:140||185 },
//                 inquiries:{ roles:140||2},
//                 stocks:{ roles:140||2},
//                 master:{ roles:140||2}          
//              }
export default Access;