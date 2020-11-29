// version 1  recursive  not yet complete
var tab1 = [1,2,3,8];                                                                       
var tab2 = [5,6,7];
res = {};
function merge_tab(res,p1,p2){
  size1 = tab1.length;
  size2 = tab2.length;
  alert("tab1" + " " + tab1[p1] + " " +"tab2" + " " + tab2[p2] + " "+ "p1:" +" "+p1 + " " + "p2 :" + " " + p2 );
  if(tab1[p1] <= tab2[p2]){
    res[tab1[p1]] = tab1[p1];
    p1 = p1 + 1;
    if((p1 < size1) && (tab1[p1] <= tab2[p2]))
      merge_tab(res,p1,p2);
    else if((p1 < size1) && (tab1[p1] >= tab2[p2])){
            //if(p2 === size2)
              console.log("value of second array to add");
              res[tab1[p1]] = tab1[p1];
    }
    else
     console.log("out of bound");
   }
   if(tab1[p1] >= tab2[p2]){
     res[tab2[p2]] = tab2[p2];
     p2 = p2 + 1;
    if(p2 < size2)
      merge_tab(res,p1,p2);
     else
      console.log("out of bound");
  }
 return res;
}
merge_tab(res,0,0);

// version 2 iterative
function fusion_sorted_link(){
var tab1 = [1,2,3,7,8];
var tab2 = [3,4,5,6,9];
var p1 = 0;
var p2 = 0;
var result = {};
alert("test");
 while(p1 < tab1.length){
     if(tab1[p1] < tab2[p2]){
        alert("p1 :" + " " + p1);
       result[tab1[p1]] = tab1[p1];
       p1++;
     }
     else{
      result[tab2[p2]] = tab2[p2];
      p2++;
     }
    }
  alert("p2:" + " "+ p2);
 if(p1!== tab1.length){
    for(var i = p1; i < tab1.length; i++)
         result[tab1[i]] = tab1[i];
 }
 if(p2!== tab2.length){
    for(var j = p2; j < tab2.length; j++)
         result[tab2[j]] = tab2[j];
 }
 return result;
}
fusion_sorted_link();

// test
var p1 = 0;
var p2 = 0;
var tab1 = [1,2,4,6,8];
var tab2 = [3,5,7,9,10,11];
while(p1 < tab1.length || p2 < tab2.length){
     if(tab1[p1] < tab2[p2]){
       console.log("venant tableau1 : " + " " +tab1[p1]);
       p1++;
     }
     else{
       console.log("venant tableau2 : " + " " +tab2[p2]);
       p2++;
     }
}



