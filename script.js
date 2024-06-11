//function to set title
function settitle(new title)
{
const titleElement = document.getelementByid('title):
// Function for description.
function setDescripton(newDescription)
{
const descriptionElement = document.getElementById( 'description');
descriptionElement.textContent = newdescription;
}

// Function to set background Color.
function setBackgroundColor (color)
{

document.body.style.backgroundcolor = color;
}

//Function to set the font color.
function setFontColor (color)
{

document.body.style.color = color;
const allElements = document.querySelectorAll('*");

all Elements.forEach(element => {element.style.color = color});
}

//Function to set the Theme
 function setTheme (theme)
{

if (theme === 'dark')
{
document.body.classList. add('dark-theme);
 document.body.classList.remove(light-theme );
}

else if(theme === 'light')
{

document.body.classList.add('light-theme);
 document.body.classList.remove(dark-theme);
}
