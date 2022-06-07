

      function getvalidation(){

        var usname=document.getElementById("username").value;
        var Hours=document.getElementById("hours").value;
        var Designation=document.getElementById("Designation").value;

        if(usname==null || usname=="")
        {
            alert("name is required");
            return false;
        }
        else if(Hours==null || Hours=="")
        {
            alert("enter working hours");
            return false;
        }
    
    var calculation=0;
    switch(Designation){
        case "Manager":calculation=Hours*90;
                       break;
        case "Consultant": calculation=Hours*70;
                           break;
        case "Trainee": calculation=Hours*45;
                        break;

    }
    
    window.localStorage.setItem('Name',usname);
    window.localStorage.setItem('Calculation',calculation);
    window.localStorage.setItem('Des',Designation);

}