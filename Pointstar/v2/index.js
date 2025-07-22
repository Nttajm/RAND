import { students } from './names.js';
document.addEventListener("DOMContentLoaded", (event) => {
    const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

let classes = [
    {
        name: 'World History 7th',
        teacher: 'Larry Mylander',
        id: 1001,
        points: 171,
        students: [
            { name: 'Joel Mulonde', id: 31733 },
            { name: 'Nicole Denson', id: 45371 },
            
    ],
    },
    {
        name: 'World History 5th',
        teacher: 'John Mylander',
        id: 1021,
        points: 451,
        students: [
            { name: 'Michael Johnson', id: 10105 },
    { name: 'Linda White', id: 10106 },
    { name: 'David Black', id: 10107 },
    { name: 'Patricia Miller', id: 10108 },
    { name: 'Thomas shoyt', id: 10109 },
    { name: 'Sarah Clark', id: 10110 },
    { name: 'James Lewis Hamil', id: 20713 },
    { name: 'Elizabeth Young', id: 10112 },
    { name: 'Richard Hall', id: 10113 },
    { name: 'Emily Anderson', id: 10140 },
    { name: 'Mark Harris', id: 10141 },
    { name: 'Sophia Green', id: 10142 },
    { name: 'Christopher Scott', id: 10143 },
    { name: 'Olivia Walker', id: 10144 },
    { name: 'Ethan Hill', id: 10145 },
    { name: 'Madison Lee', id: 10146 },
    { name: 'Jacob King', id: 10147 },
    { name: 'Ava Lewis', id: 10148 },
    { name: 'Liam Robinson', id: 10149 },
    { name: 'Isabella Clark', id: 10150 },
    { name: 'Matthew Harris', id: 10151 },
    { name: 'Charlotte Adams', id: 10152 },
            
    ],
    },
]

let selectedStudents = []

function renderClassses() {
    const classesSec = document.querySelector('.classes-sec')
    classesSec.innerHTML = ''

    classes.forEach(cl => {
        const classDiv = document.createElement('div')
        classDiv.classList.add('class')
        classDiv.id = cl.id + '-class'
        classDiv.innerHTML = `
            <span>${cl.name}</span>
            <span>${cl.teacher} - ${cl.points} points</span>
        `
        classesSec.appendChild(classDiv)
    })
}

renderClassses()

const allClasses = document.querySelectorAll('.class')
allClasses.forEach(cl => {
    cl.addEventListener('click', () => {
        const id = cl.id.split('-')[0]
        viewClass(id)
    })
})

function viewClass(id) {
    const viewerDiv = document.querySelector('.viewer');
    viewerDiv.classList.toggle('dn');

    const studentsDiv = document.getElementById('js-student-classes');
    const classStudents = classes.find(cl => cl.id === Number(id)).students;

    studentsDiv.innerHTML = '';

    classStudents.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = renderStudentHtml(student);
        studentsDiv.appendChild(studentDiv);
    });
}

// Attach the checkbox listener only once
document.addEventListener('click', (event) => {
    if (event.target.matches('input[type="checkbox"][data-meta-name]')) {
        const checker = event.target;

        const name = checker.dataset.metaName;
        const id = checker.dataset.metaId;

        if (checker.checked) {
            if (!selectedStudents.some(student => student.id === id)) {
                selectedStudents.push({ name, id });
            }
        } else {
            selectedStudents = selectedStudents.filter(student => student.id !== id);
        }

        if (selectedStudents.length > 0) {
            selectedInfoDiv.classList.add('selecting');
        } else {
            selectedInfoDiv.classList.remove('selecting');
        }

        updateSels();
    }
});


function showSelDiv() {
    const selectedNav = document.querySelector('.selected-info')
    selectedNav.classList.toggle('selecting')
    updateSels()
}


function updateSels() {
    const scrollsec = document.querySelector('.scroll-items')

    scrollsec.innerHTML = `
    `

    selectedStudents.forEach(student => {
        const firstName = student.name.split(' ')[0];
        scrollsec.innerHTML += `
             <div class="s-item">
                <img src="image.png" alt="pfp" class="mini-pfp">
                <span>${firstName}</span>
            </div>
        `

    })
    
}

// Listen for input events on the search field
// Listen for input events on the search field
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = ''; // Clear previous results

    // Filter students by name or ID
    const filteredStudents = students.filter(student => {
        return (
            student.name.toLowerCase().includes(query) ||
            student.id.toString().includes(query)
        );
    });

    // Limit the results to the top 6 closest matches
    const topResults = filteredStudents.slice(0, 6);

    // Display results or clear the HTML when no match
    if (topResults.length > 0) {
        topResults.forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student');

            studentDiv.innerHTML = renderStudentHtml(student);
            resultsDiv.appendChild(studentDiv);
        });
    } else {
        resultsDiv.textContent = 'No results found'; // Clear content if no match
    }

    // Clear results if search input is empty
    if (searchInput.value === '') {
        resultsDiv.textContent = '';
        resultsDiv.classList.remove('open');
    }

    // Show results if there is a query
    if (searchInput.value !== '') {
        resultsDiv.classList.add('open');
    }

    document.addEventListener("click", (event) => {
  // Check if the click was outside the results div
        if (!resultsDiv.contains(event.target)) {
            resultsDiv.classList.remove('open'); // Hide the div
        }
    });
});

function renderStudentHtml(student) {

    const isSelected = selectedStudents.some(
        selected => selected.id.toString() === student.id.toString()
    );
    const html = `
        <div class="blocket">
                    <input 
                        type="checkbox" 
                        data-meta-name='${student.name}' 
                        data-meta-id='${student.id}' 
                        name="" 
                        id="js-student-checker" 
                        ${isSelected ? 'checked' : ''} 
                    >
                </div>
                <div class="blocket">
                    <img src="image.png" alt="pfp" class="base-pfp">
                </div>
                <div class="st-name blocket">
                    <span>${student.name}</span>
                    <span>${student.id}</span>
                </div>
                <button class="plus">
                    +2
                </button>
                <button class="plus">
                    -2
                </button>
                <div class="blocket">
                    <img src="manage.png" alt="pfp" class="base-pfp st stand_er-invert">
                </div>
                `
    return html
}



const selectedInfoDiv = document.querySelector('.selected-info'); // Ensure this selector exists and is correct


const allTargets = document.querySelectorAll('[data-toggle]')

const closeDiv = document.getElementById('selecting-close')
closeDiv.addEventListener('click', () => {
    selectedStudents.length = []
})

allTargets.forEach(item => {
    item.addEventListener('click', () => {
        const classToC = item.dataset.togglecl; // 'selected'
        const divToC = document.querySelector(item.dataset.toggle); // Selects '.selected-info'
        
        // Ensure divToC is valid before trying to toggle class
        if (divToC) {
            divToC.classList.toggle(classToC); // Toggles 'selected' class on .selected-info
        }
    })
})

});