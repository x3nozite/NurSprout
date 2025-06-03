if(!localStorage.getItem("login-status")){
    alert("You must be logged in to access the home page!");
    window.location.href = "/registration/register.html";
}

document.addEventListener("DOMContentLoaded", () => {
    
    const name = document.querySelector(".name");

    function resetLocalStorage() {
        const nutrients = [
        "iron",
        "vitaminC",
        "calcium",
        "vitaminA",
        "zinc",
        "protein",
        "carbohydrates",
        "fats",
        "vitaminD",
        ];

        nutrients.forEach(nutrient => {
            localStorage.setItem(name.textContent + nutrient, "0");
        });

        updateNutritionList([]);
    }

    function updateNutritionList(log) {
        const foodNutrition = {
            banana: { iron: 0.3, vitaminC: 8, calcium: 5, vitaminA: 10, zinc: 0.1, protein: 1, carbohydrates: 27, fats: 0.3 },
            avocado: { iron: 0.6, vitaminC: 10, calcium: 18, vitaminA: 5, zinc: 0.2, protein: 2, carbohydrates: 12, fats: 15 },
            pumpkin: { iron: 0.8, vitaminC: 9, calcium: 10, vitaminA: 2, zinc: 0.3, protein: 2, carbohydrates: 8, fats: 0.1 }
        };
    
        const nutrients = ["iron", "vitaminC", "calcium", "vitaminA", "zinc", "protein", "carbohydrates", "fats", "vitaminD"];
    
        let totalNutrition = {};

        nutrients.forEach(nutrient => {
            const value = localStorage.getItem(name.textContent + nutrient);
            if(localStorage.getItem(name.textContent + nutrient) !== null)
            {
                totalNutrition[nutrient] = parseFloat(value);
            }else{
                totalNutrition[nutrient] = 0;
            }
            
        });

        log.forEach(({ food, amount }) => {
            const key = food.toLowerCase();
            const data = foodNutrition[key];
            if (data && !isNaN(amount)) {
                nutrients.forEach(nutrient => {
                    totalNutrition[nutrient] += (data[nutrient] || 0) * amount;
                });
            }
        });

        nutrients.forEach(nutrient => {
            localStorage.setItem(name.textContent + nutrient, totalNutrition[nutrient].toString());
        });
    
        const nutritionTargets = {
            iron: 11, 
            vitaminC: 50, 
            calcium: 260, 
            vitaminA: 500, 
            vitaminD: 10,
            zinc: 5,
            protein: 11,
            carbohydrates: 95,
            fats: 11 
        };
    
        Object.keys(totalNutrition).forEach((nutrient) => {
            const total = totalNutrition[nutrient];
            const target = nutritionTargets[nutrient];
            const percentage = (total / target) * 100;
    
            // update bar
            const nutrientElement = document.querySelector(`.nutrient[data-nutrient="${nutrient}"]`);
            if (nutrientElement) {
                const barFill = nutrientElement.querySelector('.bar-fill');
                const barText = nutrientElement.querySelector('.top-row span:nth-child(2)');
    
                barFill.style.width = `${percentage}%`;
    
                barText.textContent = `${total.toFixed(1)} / ${target} ${nutrient === 'iron' || nutrient === 'zinc' || nutrient === 'vitaminC' ? 'mg' : nutrient === 'vitaminA' ? 'mcg' : 'g'}`;
    
                const percentageText = nutrientElement.querySelector('.top-row span:nth-child(3)');
                percentageText.textContent = `${percentage.toFixed(1)}%`;
            }
        });
    }

    function handleFoodLog()
    {
        const rawText = input.value.trim();
    
        if(!rawText) 
        {
            alert("You haven't put anything on the food logger!");
            return;
        }

        //handle reset
        if(rawText.toLowerCase() === "reset")
        {
            alert("Nutrition resetted!");
            resetLocalStorage();
            input.value = "";
            return;
        }

        const foods = rawText.split(",").map(item => item.trim());

        //handles valid food
        const validFood = [
            "banana",
            "avocado",
            "pumpkin",
        ];
    
        let valid = true;
        const logs = foods.map(entry => {
            const match = entry.match(/^(.+?)\s+([\d.]+)\s*(\w+)?$/);
            
            if(match === null)
            {
                alert("your input is not valid!! (ex: Banana 1tsp, avocado 2tsp)");
                valid = false;
                return;
            }

            if(!validFood.includes(match[1].toLowerCase()))
            {
                alert(match[1] + "is not in the list!")
                valid = false;
                return;
            }
    
            if(match)
            {
                return{
                    food: match[1],
                    amount: parseFloat(match[2]),
                    unit: match[3]
                };  
            }else{
                alert("your input is not valid!! (ex: Banana 1tsp, avocado 2tsp)");
                valid = false;
                return;
            }
        });
    
        console.log(logs);
        if(valid === true) 
        {
            alert("Food added!");
            updateNutritionList(logs);
            input.value = "";
        }
    }
    
    const input = document.getElementById("food-input");
    const submitButton = document.getElementById("submit-log");
    
    submitButton.addEventListener("click", handleFoodLog);
    
    input.addEventListener("keypress", (e) => {
        if(e.key == "Enter")
        {
            handleFoodLog();
        }
    });

    
    
    //handle set sleep schedule
    const sleepScheduleButton = document.getElementById("adjust-sleep-time");
    
    function linkToSleepSchedule() {
        //link sendiri lah
      window.location.href = "sleeptime.html";
    }
    sleepScheduleButton.addEventListener("click", linkToSleepSchedule);

    //handle set nutrition button
    const addNutritionButton = document.getElementById("add-nutrition");
    
    function linkToAddNutrition() {
        window.location.href = "nutrition.html";
    }
    addNutritionButton.addEventListener("click", linkToAddNutrition);
    
    //handle dropdown name
    const dropdown = document.querySelector("#baby-dropdown");
    
    name.textContent = dropdown.options[dropdown.selectedIndex].text;
    
    dropdown.addEventListener("change", () => 
    {
        name.textContent = dropdown.options[dropdown.selectedIndex].text;
        updateNutritionList([]);
    });
    
    updateNutritionList([]);
});
