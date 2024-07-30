/* Copyright of GENIAL INGELE (2023). This calculator is merely an estimation of what your bond would cost and the other costs associated with it.
    Hence, GENIAL INGELE is not liable for any inaccuracies found in this code. We are trying to guide you in making a decision in the best way we can, 
    but the accurate information will be given to you by your bank.
    NOTE: Data found on this code is based on South African laws and fees.
    
    DATE: 25 SEPTEMBER 2023
    
    GENIAL INGELE */


    /*TODO 
    * Automatically separate large numbers with comma or point when typed in
    * Loop through 2 arrays to compare and assign values based on a set of conditions. E.g. loan amount vs deeds office fees matching. 
    */

//an Array of input fields as objects
var input_fields = [document.getElementById(""), 
document.getElementById(""), document.getElementById(""), 
document.getElementById("")];

//GET THE SECTION CONAINTERS
const personalContainer = document.getElementById("personalContainer");
const professionalContainer = document.getElementById("professionalContainer");
const educationContainer = document.getElementById("educationContainer");
const skillsContainer = document.getElementById("skillsContainer");
const languagesContainer = document.getElementById("languagesContainer");
const certificateContainer = document.getElementById("certificateContainer");
const resultsContainer = document.getElementById("resultsContainer");
const progressContainer = document.getElementById("progressContainer");


// LISTEN TO BUTTONS

/*Now, each button will have a unique ID 
because we each of them send you  to  specific section.
They hide the current section and show the next one.*/

const nextBtnPersonal = document.getElementById("nextBtnPersonal");

const nextBtnProfessional = document.getElementById("nextBtnProfessional");
const prevBtnProfessional = document.getElementById("prevBtnProfessional");

const nextBtnEducation = document.getElementById("nextBtnEducation");
const prevBtnEducation = document.getElementById("prevBtnEducation");

const nextBtnSkill = document.getElementById("nextBtnSkill");
const prevBtnSkill = document.getElementById("prevBtnSkill");

const nextBtnLang = document.getElementById("nextBtnLang");
const prevBtnLang = document.getElementById("prevBtnLang");

const prevBtnCert = document.getElementById("prevBtnCert");
const completeBtn = document.getElementById("completeBtn");


//NOW LISTEN TO THE "LINKS" TO THE SECTIONS
const personalProgress = document.getElementById("personalProgress");
const professionalProgress = document.getElementById("professionalProgress");
const educationProgress = document.getElementById("educationProgress");
const skillsProgress = document.getElementById("skillsProgress");
const langProgress = document.getElementById("langProgress");
const certProgress = document.getElementById("certProgress");

//INITIALLY, WE WANT ALL OTHER SECTIONS TO BE HIDDEN
function hideOtherThanPersonal (){
    personalContainer.style.display = "block";
    professionalContainer.style.display = "none";
    educationContainer.style.display = "none";
    skillsContainer.style.display = "none";
    languagesContainer.style.display = "none";
    certificateContainer.style.display = "none";
    resultsContainer.style.display = "none";
}

hideOtherThanPersonal();


//NOW WE WILL DISPLAY CONTAINERS BASED ON THE BUTTON CLICKED
function hideOtherThanThis (containerName){

    if (containerName == "personalContainer"){
        personalContainer.style.display = "block";
        professionalContainer.style.display = "none";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "none";
        languagesContainer.style.display = "none";
        certificateContainer.style.display = "none";
    }
    else if (containerName == "professionalContainer"){
        personalContainer.style.display = "none";
        professionalContainer.style.display = "block";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "none";
        languagesContainer.style.display = "none";
        certificateContainer.style.display = "none";
    }
    else if (containerName == "educationContainer"){
            personalContainer.style.display = "none";
            professionalContainer.style.display = "none";
            educationContainer.style.display = "block";
            skillsContainer.style.display = "none";
            languagesContainer.style.display = "none";
            certificateContainer.style.display = "none";
    }

    else if (containerName == "skillsContainer"){
        personalContainer.style.display = "none";
        professionalContainer.style.display = "none";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "block";
        languagesContainer.style.display = "none";
        certificateContainer.style.display = "none";
    }

    else if (containerName == "languagesContainer"){
        personalContainer.style.display = "none";
        professionalContainer.style.display = "none";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "none";
        languagesContainer.style.display = "block";
        certificateContainer.style.display = "none";
    }

    else if (containerName == "certificateContainer"){
        personalContainer.style.display = "none";
        professionalContainer.style.display = "none";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "none";
        languagesContainer.style.display = "none";
        certificateContainer.style.display = "block";
    }

    else if (containerName == "certificateContainer"){
        personalContainer.style.display = "none";
        professionalContainer.style.display = "none";
        educationContainer.style.display = "none";
        skillsContainer.style.display = "none";
        languagesContainer.style.display = "none";
        certificateContainer.style.display = "block";
    }


}

//NOW LET'S GET THE PARENT IDs OF BUTTONS
const nextBtnPersonalPID = nextBtnPersonal.parentElement.parentElement.id;
const nextBtnProfessionalPID = nextBtnProfessional.parentElement.parentElement.id;
const nextBtnEducationPID = nextBtnEducation.parentElement.parentElement.id;
const nextBtnSkillsPID = nextBtnSkill.parentElement.parentElement.id;
const nextBtnLangPID = nextBtnLang.parentElement.parentElement.id;
const prevBtnCertPID = prevBtnCert.parentElement.parentElement.id;
const completeBtnPID = completeBtn.parentElement.parentElement.id;
const resultsContainerPID = resultsContainer.parentElement.parentElement.id;


//ALL ABOUT THE PREVIEW CONTAINER
const disExperienceFullContainer = document.getElementById('disExperienceFullContainer');

function realTimeTyping() {
    //For the personal details

    //the id "fullName" is concatenation of the first and last name inputs
    //For other details, the 2 lines above gets the value the one below prints

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = document.getElementById('fullName');
    fullName.textContent = firstName + " " + lastName;

    const jobTitle = document.getElementById('jobTitle').value;
    const disTitle = document.getElementById('disTitle').textContent = jobTitle;

    const intro = document.getElementById('intro').value;
    const disIntro = document.getElementById('disIntro').textContent = intro;

    const phone = document.getElementById('phone').value;
    const disPhone = document.getElementById('disPhone').textContent = phone;

    const email = document.getElementById('email').value;
    const disEmail = document.getElementById('disEmail').textContent= email;


    const website = document.getElementById('website').value;
    const disWebsite = document.getElementById('disWebsite').textContent= website;


    const homeAddress = document.getElementById('homeAddress').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;

    const disAddress = document.getElementById('disAddress').textContent = `${homeAddress}  ${city}, ${country} ${postalCode}`;

    //For the experience details
    const employer = document.getElementById('employer').value;
    const position = document.getElementById('position').value;
    const disRole = document.getElementById('disRole').innerHTML= `<b>${position}</b> at ${employer} `;


    const workStartDate = document.getElementById('workStartDate').value;
    const workHere = document.getElementById('workHere');

    //if it is on then they didn't select "still working here"
   

    const workEndDate = document.getElementById('workEndDate').value;

    const formattedDate = document.getElementById('disWorkYear').innerHTML= `${workStartDate.substring(0,7)} - ${workEndDate} `;

    const duties = document.getElementById('duties').value;
    const disDuties = document.getElementById('disRole').innerHTML= `<b>${position}</b> at ${employer} `;


    //For the eduction details
}

//PROGRESS BAR
//We want the color of the section tab to change when the user progresses
personalProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(nextBtnPersonalPID);
        }
)
professionalProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(nextBtnProfessionalPID);
        }
)
educationProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(nextBtnEducationPID);
        }
)
skillsProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(nextBtnSkillsPID);
        }
)
langProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(nextBtnLangPID);
        }
)
certProgress.addEventListener("click", 
        function(){
            hideOtherThanThis(prevBtnCertPID);
        }
)





//TRIGGER SHOWING THE NEXT OR PREVIOUS SECTION AFTER BUTTON CLICK

nextBtnPersonal.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnProfessionalPID);
        
        //IF NEXT BTN IN PERSONAL IS CLICKED

    }

);

//BUTTONS ON THE PROFESSIONAL SECTION BRING YOU EITHER TO PERSONAL OR EDUCTION
prevBtnProfessional.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnPersonalPID);

        //IF PREV BTN IN PRO IS CLICKED 

    }
)

nextBtnProfessional.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnEducationPID);
        //IF NEXT BTN IN PRO IS CLICKED 

    }

)

//BUTTONS ON THE EDUCATION SECTION BRING YOU EITHER TO SKILLS OR PROFESSIONAL
prevBtnEducation.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnProfessionalPID);
        //IF PREV BTN IN EDU IS CLICKED 
    }

)

nextBtnEducation.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnSkillsPID);
        //IF NEXT BTN IN EDU IS CLICKED 
    }

)


//BUTTONS ON THE SKILLS SECTION BRING YOU EITHER TO LANGUAGES OR EDUCATION
prevBtnSkill.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnEducationPID);
        //IF PREV BTN IN SKILL IS CLICKED 
    }

)

nextBtnSkill.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnLangPID);
        //IF NEXT BTN IN SKILL IS CLICKED 
    }

)


//BUTTONS ON THE LANGUAGES SECTION BRING YOU EITHER TO CERTIFICATES OR SKILLS
prevBtnLang.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnSkillsPID);
    }

)

nextBtnLang.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(prevBtnCertPID);
    }

)

//BUTTONS ON THE CERTIFICATES SECTION BRING YOU EITHER TO COMPLETE OR LANGUAGES
prevBtnCert.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(nextBtnLangPID);
    }

)

completeBtn.addEventListener("click", 
    function(event){
        event.preventDefault();
        hideOtherThanThis(resultsContainerPID);
    }
)