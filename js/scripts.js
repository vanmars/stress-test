// Result 1: Three+ Warning, Three+ Symptoms, 1- Coping - provide resources
// Result 2: Three+ Warning, Three+ Symptoms, 3+ Coping - doing great
// Result 3: 1- Warning, 1-Symbptoms, 1- Coping - don't need coping

$(document).ready(function() {
  $("#stressForm").submit(function(event) {
    event.preventDefault();
    let warningSignsArray = [];
    let healthSymptomsArray = [];
    let copingMethodsArray = [];
    // Create arrays of all values
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      const warningSign = $(this).val();
      warningSignsArray.push(warningSign);
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      const healthSymptom = $(this).val();
      healthSymptomsArray.push(healthSymptom);
    });
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      const copingMethod = $(this).val();
      copingMethodsArray.push(copingMethod);
    });
    console.log(warningSignsArray);
    console.log(healthSymptomsArray);
    console.log(copingMethodsArray);
    // Create conditional statements
    if (warningSignsArray.length >= 3 && healthSymptomsArray.length >=3 && copingMethodsArray.length <=1){
      $("#return").append("Your stress level is high. Check out these resources:");
    } else if (warningSignsArray.length >= 3 && healthSymptomsArray.length >= 3 && copingMethodsArray.length >= 3){
      $("#return").append("Your stress level is high, but you are managing it well. Nice work!");
    } else if (warningSignsArray.length <=1 && healthSymptomsArray.length <= 1){
      $("#return").append("You do not have high stress and so are not in need of coping recommendations.");
    } else {
      $("#return").append("Thanks for completing our survey. Your results are mixed. Check out these resources below:");
    };
    $("form").hide();
    $("#return").show();
  });
});

