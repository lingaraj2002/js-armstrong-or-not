let a =prompt ("enter the number");
    var c=a;
    var a1=a;
    var d=0;
    i=0;
    while(a1>0){
        b1=a1%10;
        a1=(a1-b1)/10;
        i++;
    }
    while(a>0){
        b=a%10;
        a=(a-b)/10;
        d+=b**i;
    }
    console.log(c);
    console.log(d);
    if(d==c){
        document.write("amstrong");
    }
    else{
    document.write("not a amstrong");
    }