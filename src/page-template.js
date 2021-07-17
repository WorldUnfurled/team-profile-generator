// Main template generation
const generateTemplate = (memberCards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-light text-center">
      <span class="navbar-brand mb-0 h1">Employees</span>
    </nav>
    <div id="card-container">`
        + 
        memberCards
        +
    `</div>
    </body>
    </html>`
}

// Generates Manager Card
const generateManagers = (managers) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span">${managers.name}</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Manager</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Attributes</h5>
        <p class="card-text">ID: ${managers.id}</p>
        <p class="card-text">Email: ${managers.email}</p>
        <p class="card-text">Office Number: ${managers.officeNumber}</p>
      </div>
    </div>`
}

// Generates Engineer Card
const generateEngineers = (engineers) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span">${engineers.name}</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Engineer</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Attributes</h5>
        <p class="card-text">ID: ${engineers.id}</p>
        <p class="card-text">Email: ${engineers.email}</p>
        <a class="card-text" href="github.com/${engineers.github}">Github: github.com/${engineers.github}</a>
      </div>
    </div>`
}

// Generates Intern Card
const generateInterns = (interns) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span">${interns.name}</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Intern</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Attributes</h5>
        <p class="card-text">ID: ${interns.id}</p>
        <p class="card-text">Email: ${interns.email}</p>
        <p class="card-text">School: ${interns.school}</p>
      </div>
    </div>`
}

// Exports
exports.generateTemplate = generateTemplate;
exports.generateManagers = generateManagers;
exports.generateEngineers = generateEngineers;
exports.generateInterns = generateInterns;