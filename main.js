Webcam.set ({
    width:350,
    height:300,
    img_format: 'png',
    image_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="captured image" src="'+data_uri+'"/>'
});

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8V8dIDQC8/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!')
}
console.log('ml5 version:', ml5.version)

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}