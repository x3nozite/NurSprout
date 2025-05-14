const typewriter = document.getElementById("typewriter");
const elements = Array.from(typewriter.children).map(e => ({
    tag: e.tagName.toLowerCase(),
    text: e.textContent
}));

typewriter.innerHTML = "";

let lineIndex = 0;
let charIndex = 0;

function typeNextChar(){
    if(lineIndex >= elements.length) return;

    if(charIndex === 0){
        const newElement = document.createElement(elements[lineIndex].tag);
        newElement.id = `line-${lineIndex}`;
        typewriter.appendChild(newElement);
    }

    const currentEl = document.getElementById(`line-${lineIndex}`);
    currentEl.textContent += elements[lineIndex].text[charIndex];
    charIndex++;

    if (charIndex < elements[lineIndex].text.length) {
        setTimeout(typeNextChar, 20); // typing speed
    } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(typeNextChar, 300); // pause between lines
    }
}

typeNextChar();