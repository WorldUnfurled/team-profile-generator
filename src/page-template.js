// Main template generation
const generateTemplate = (memberCards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`
        + 
        memberCards
        +
    `</body>
    </html>`
}

// Generates Manager Card
const generateManagers = (managers) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span" style="">Header</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Caption</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Adios</p>
      </div>
    </div>`
}

// Generates Engineer Card
const generateEngineers = (engineers) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span" style="">Header</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Caption</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Adios</p>
      </div>
    </div>`
}

// Generates Intern Card
const generateInterns = (interns) => {
    return `<div class="card border-primary bg-dark" style="max-width: 18rem;">
    <div class="card-header text-primary"><h1 class="header-span" style="">Header</h1><br><h2 class="header-cap" style="font-size: 1.5 em;">Caption</h2></div>
      <div class="card-body text-primary">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Adios</p>
      </div>
    </div>`
}

// Exports
exports.generateTemplate = generateTemplate;
exports.generateManagers = generateManagers;
exports.generateEngineers = generateEngineers;
exports.generateInterns = generateInterns;