const messages = ["Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in letious fields! 30 QUOTAS LEFT!"]
var number = Math.floor(Math.random() * messages.length);
document.querySelector("#promote > b").innerHTML = messages[number];
function displayRandomMessage() {
    if (number >= 2){
        number = 0
    }
    else{
        number++
    }
    document.querySelector("#promote > b").innerHTML = messages[number];
}
setInterval(displayRandomMessage, 3000);


const video = document.getElementById('promotionVid');
const videos = [
    {
    source: [
        {
        src: "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4", type: "video/mp4"
        },
        {
        src: "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv",type: "video/mkv"
        }
    ],
    autoplay: true,
    controls: true,
    muted: true,
    alt: "Your browser does not support this video format"
    },
    {
    source: [
        {
        src: "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4", type: "video/mp4"
        },
        {
        src: "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4",type: "video/mkv"
        }
    ],
    autoplay: true,
    controls: true,
    muted: true,
    alt: "Your browser does not support this video format"
    }
];
var activeVideo = 0;

video.addEventListener('ended', function(e) {
    activeVideo = (activeVideo + 1) % videos.length; 
    video.src = videos[activeVideo].source[0].src;
    video.play();
});

video.src = videos[activeVideo].source[0].src;
video.play();

   
