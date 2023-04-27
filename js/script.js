function burger() {
    let burgerVisibility = document.getElementById("burger");
    let triggerView = document.getElementById("trigger");
    if (burgerVisibility.style.display === "block") {
        burgerVisibility.style.display = "none";
        document.getElementById("trigger").innerHTML = "<svg width=\"31\" height=\"25\" viewBox=\"0 0 31 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "              <path d=\"M0 0H31V3.78788H0V0Z\" fill=\"#282828\"/>\n" +
            "              <path d=\"M0 10.6061H31V14.3939H0V10.6061Z\" fill=\"#282828\"/>\n" +
            "              <path d=\"M0 21.2121H31V25H0V21.2121Z\" fill=\"#282828\"/>\n" +
            "            </svg>";
    } else {
        burgerVisibility.style.display = "block";
        document.getElementById("trigger").innerHTML = "<svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M0 22.2779L22.2778 0L24.9999 2.72212L2.72212 25L0 22.2779Z\" fill=\"#282828\"/>\n" +
            "<path d=\"M2.72218 1.5326e-05L25 22.2779L22.2779 25L5.7643e-05 2.72214L2.72218 1.5326e-05Z\" fill=\"#282828\"/>\n" +
            "</svg>\n";
    }
}




