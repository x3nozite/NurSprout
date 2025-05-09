const description = {
    trackNutrition: "<p>Keep a complete record of your baby's feeding routines. Log what your baby eats, how much, and when. helping you stay on top of their nutritional needs and spot any changes in appetite or growth patterns over time. Get recommendations on enviroment-friendly food options.</p>",
    logsNapBed: "<p>Record sleep times with just a few clicks, including short naps, bedtime, and wake-ups. Over time, you'll be able to view trends and patterns, making it easier to build a consistent routine that supports your baby's development and helps improve their (and your) sleep quality.</p>",
    aiChatbot: "<p>Need quick advice or unsure how to use a feature? The built-in AI chatbot (NuRI) is always available to assist you, from offering parenting tips and answering common baby care questions, to helping you navigate the app. It's just like having a friendly helper in your pocket, 24/7.</p>"
}

const features = document.getElementsByClassName("features");
const featuresDesc = document.getElementsByClassName("features-desc");
const featureImg = document.getElementById("features-img")

for(let i=0; i<features.length; i++){
    features[i].addEventListener("click", function(){

        for(let i=0; i<features.length; i++){
            featuresDesc[i].innerHTML = ""
        }

        const point = features[i].getAttribute("data-point");
        featuresDesc[i].innerHTML = description[point];
        console.log(point);

        for(let i=0; i<features.length; i++){
            features[i].classList.remove("selected");
        }

        features[i].classList.add("selected");
        featureImg.style.backgroundImage = `url("assets/feature-${i+1}.png")`
    });
}