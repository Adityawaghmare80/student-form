const cl =console.log;

const stdForm = document.getElementById("stdForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const stdInfo = document.getElementById("stdInfo");
const mname = document.getElementById("mname");


const templating = (arr) => {
    let result = '';
    arr.forEach((std, i) => {
        result +=    `<tr>
                          <td>${i+1}</td>
                          <td>${std.fname}</td>
                          <td>${std.mname}</td>
                          <td>${std.lname}</td>
                          <td>${std.email}</td>
                          <td>${std.contact}</td>
                      </tr>`                 
                  
    });

    stdInfo.innerHTML = result;
}


const onStdAdd = (eve) => {
eve.preventDefault();
let studArr = [];

let studObj = {
   fname : fname.value,
   mname : mname.value,
   lname : lname.value,
   email : email.value,
   contact : contact.value
}
studArr.push(studObj)
cl(studArr);

templating(studArr);
Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Successfully Added !!!",
    showConfirmButton: false,
});
eve.target.reset();
}


stdForm.addEventListener("submit", onStdAdd)
