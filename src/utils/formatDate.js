const formatDate=(date)=>{
     const d= new Date(date);
     let month = `${d.getMonth()+1}`;
     let day = `${d.getDate()}`;
     const year= `${d.getFullYear()}`;

     if(month.length<2){
          month= `0${month}`;
     }
     if(day.lenght<2){
        day= `0${day}`;
     }

     return [year,month,day].join('-');



}
export default formatDate;