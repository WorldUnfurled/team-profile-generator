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
    return `<div class="card border-primary mb-3" style="max-width: 25rem;">
      <div class="card-header bg-transparent border-primary">${managers.getName()}</div>
      <div class="card-body text-primary">
        <h5 class="card-title">Attributes</h5>
        <p class="card-text">${managers.getId()}</p>
        <p class="card-text">${managers.getEmail()}</p>
        <p class="card-text">${managers.getOfficeNumber()}</p>
      </div>
      <div class="card-footer bg-transparent border-primary">${managers.getRole()}</div>
    </div>`
}

// Generates Engineer Card
const generateEngineers = (engineers) => {
    return `<div class="card border-success mb-3" style="max-width: 25rem;">
    <div class="card-header bg-transparent border-success">${engineers.getName()}</div>
    <div class="card-body text-success">
      <h5 class="card-title">Attributes</h5>
      <p class="card-text">${engineers.getId()}</p>
      <p class="card-text">${engineers.getEmail()}</p>
      <p class="card-text">${engineers.getGithub()}</p>
    </div>
    <div class="card-footer bg-transparent border-success">${engineers.getRole()}</div>
  </div>`
}

// Generates Intern Card
const generateInterns = (interns) => {
    return `<div class="card border-danger mb-3" style="max-width: 25rem;">
    <div class="card-header bg-transparent border-danger">${interns.getName()}</div>
    <div class="card-body text-danger">
      <h5 class="card-title">Attributes</h5>
      <p class="card-text">${interns.getId()}</p>
      <p class="card-text">${interns.getEmail()}</p>
      <p class="card-text">${interns.getSchool()}</p>
    </div>
    <div class="card-footer bg-transparent border-danger">${interns.getRole()}</div>
  </div>`
}

// Exports
exports.generateTemplate = generateTemplate;
exports.generateManagers = generateManagers;
exports.generateEngineers = generateEngineers;
exports.generateInterns = generateInterns;