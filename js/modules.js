const accordions = document.querySelectorAll('.accordion');

let openedAccordions = new Array();

const hideAccordion = (element) => {
    element.querySelector('.questions__answer').style.display = 'block';
    element.querySelector('.questions__answer').style.height = 0;
    element.querySelector('.questions__answer').style.overflow = 'hidden';
    element.querySelector('.questions__answer').style.marginTop = 0;
    element.querySelector('.questions__answer').style.transition = 'height 0.5s, margin-top 0.5s';
    element.querySelector('.questions__button').style.transform = 'rotate(45deg)';
};

const showAccordion = (element) => {
    element.querySelector('.questions__answer').style.display = 'block';
    element.querySelector('.questions__answer').style.height = '63px';
    element.querySelector('.questions__answer').style.marginTop = '29px';
    element.querySelector('.questions__answer').style.transition = 'height 0.5s, margin-top 0.5s';
    element.querySelector('.questions__button').style.transform = 'rotate(225deg)';
};

const hasClass = (element) => {
    if (element.classList.contains('accordion--close')) {
        hideAccordion(element);
    } else {
        showAccordion(element);
    }
};

const addToArray = (element) => {
    if (element.classList.contains('accordion--close')) {
        openedAccordions = openedAccordions.filter((it) => it !== element);
    } else {
        openedAccordions.push(element);
    }
    if (openedAccordions.length > 3) {
        openedAccordions[0].classList.add('accordion--close');
        hasClass(openedAccordions[0]);
        openedAccordions.splice(0, 1);
    }
};

const toggleAccordion = (element) => {
    element.classList.toggle('accordion--close');
    hasClass(element);
};

const onToggleButtonClick = (element) => {
    element.addEventListener('click', () => {
        toggleAccordion(element);
        addToArray(element);
    });
};

const onEnterKeyDown = (element) => {
    element.addEventListener('keydown', (evt) => {
        if(evt.key === 'enter') {
            toggleAccordion(element);
            addToArray(element);
        }
    }) 
    
};

for (accordion of accordions) {
    accordion.classList.add('accordion--close');
    hasClass(accordion);
    onToggleButtonClick(accordion);
    onEnterKeyDown(accordion);
}
