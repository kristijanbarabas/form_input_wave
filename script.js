const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    /*SPLIT FUNCTION SPLITS THE TEXT (EMAIL) INTO AN ARRAY, THEN MAP CREATES AN ARRAY OF EACH LETTER WITH THE SPAN ELEMENT AROUND IT,
    AND WITH JOIN IT TURNS BACK INTO A STRING, AND WITH THE IDX PARAMETAR THE TIMING IS SET, IT'S MULTIPLIED WITH 50 TO GET DIFFERENT TIMINGS */
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
    })