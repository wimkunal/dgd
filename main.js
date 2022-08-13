

prediction_1 = "";


//Set the property for Webcam
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
//passing the value of camera div inside the camera variable
camera = document.getElementById("camera");

//attaching the camera div inside the Webcam.attach() function
Webcam.attach('#camera');

//defining take_snapshot() function
function take_snapshot() {
    Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+ data_uri+'"/>';
    });
}


//consoling ml5.version for check 
console.log('ml5 version-',ml5.version);

//defining image classification
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sMB6h0PKc/model.json',modelLoaded);

//write the modelLoaded() function
function modelLoaded() {
    console.log('Model Loaded!');
}





//define check function for check the emotion of the user
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

//define gotResult for check that which is the emotion of the user
function gotResult(error,results) {
    if (error) {
       console.error(error);
    } 
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
       
        prediction_1 = results[0].label;
       
        speak();

        if(results[0].label=="Left"){
            document.getElementById("update_emoji").innerHTML = "&#9754;";
        }
        if(results[0].label=="Right"){
            document.getElementById("update_emoji").innerHTML = "&#9755;";
        }
        if(results[0].label=="Up"){
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }
        if(results[1].label=="Down"){
            document.getElementById("update_emoji").innerHTML = "&#9757;";
        }

        if(results[1].label=="Victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[1].label=="Thumbs Up,Like"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";

        }
        if(results[1].label=="Thumbs Down,Disike"){
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
    }
}
