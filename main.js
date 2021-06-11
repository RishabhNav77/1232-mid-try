function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550)
    canvas.position(560,150)
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotResult)
}

function draw() {
    background("#808080");
}

function modelloaded() {
    console.log("Model has got Loaded !")

}

function gotResult(results) {
    if(results.length > 0) {
        console.log(results);
    }
}