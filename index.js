class employee{
constructor(name){
    this.name = name
}


    login(){
        console.log(`${this.name} is logged in`);
    }
    
    logout(){
 console.log(`${this.name} is logged out`);
    }

    resquestLeaves(leaves){
        console.log(`employee requested ${leaves}`);
    }
}



class programmer extends employee{
constructor(name){
    super(name)
    this.name = name
    console.log(`this is new constructor`);

}

   resquestLeaves(leaves){
    super.resquestLeaves(5)
    
   }
}

let e = new programmer("shankey")

e.login()
e.logout()
e.resquestLeaves(6)
