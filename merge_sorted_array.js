// version 1   not yet complete
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
