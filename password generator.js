let lent = document.getElementById("rndm");
console.log(lent.value);
gv=lent.value;
function gh(gv){
    gg=lent.value;
    console.log(gg);
    let chrs="abcdefghijklmnopqstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345677890*!@#$%^&*";
    let newpass="";
    for (let i=0;i<=gg;i++){
        newpass += chrs[Math.floor(Math.random() * chrs.length)]
    }
    newpas=newpass.substr(0,gg);
    console.log(newpas);
    document.getElementById("getoutput").value= newpas;
}
