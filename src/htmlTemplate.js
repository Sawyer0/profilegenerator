// const music = {
//     title: "The Less I Know The Better",
//     artist: "Tame Impala",
//     album: "Currents"
//   };

//   // write code between the <div> tags to output your objects data
//   const songSnippet = `
//     <div class="song">
//        <h2>${music.title}</h2>
//        <p class="artist">${music.artist}</p>
//        <p class="album">${music.album}</p>
//     </div>
//   `;
//   const element = document.getElementById("music");
//   element.innerHTML = songSnippet;

const htmlArray = [];
const htmlStart = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${teammateProfile[0]}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
        />
        <link rel="stylesheet" href="../assets/style.css" />
      </head>
    
      <body>
        <section class="section">
          <div class="container">
            <h1 class="title">${teammateProfile[0]}</h1>
          </div>
        </section>
    
        <div class='container has-text-centered'>
          `;
htmlArray.push(htmlStart);

for (let i = 1; i < teammateProfile.length; i++) {
  let object = `
            
          <div class='columns is-mobile is-centered'>
            <div class='column is-3 m-5'>
              <div class="card">
                <div class="card-content">
                  <ul>
                    <li>${teammateProfile[i].name}</li>
                    <li>${teammateProfile[i].title}</li>
                    <li>ID: ${teammateProfile[i].id}</li>
                    <p>Email: <a href="mailto:${teammateProfile[i].email}">${teammateProfile[i].email}</a></p>
                  </ul>
                </div>
              
            </div>
            `;

  if (teammateProfile[i].officeNumber) {
    object += `
              <p>Office Number: ${teammateProfile[i].officeNumber}</p>
              `;
  }
  if (teammateProfile[i].github) {
    object += `
              <p>GitHub: <a href="https://github.com/${teammateProfile[i].github}">${teammateProfile[i].github}</a></p>
              `;
  }
  if (teammateProfile[i].school) {
    object += `
              <p>School: ${teammateProfile[i].school}</p>
              
              `;
  }
  object += `
          </div>
          </div>  
          `;
  htmlArray.push(object);
}

const htmlEnd = `
        </div>
      </body>
    </html>
    `;

htmlArray.push(htmlEnd);

fs.writeFile(
  `./index.html/${teammateProfile[0]}.html`,
  htmlArray.join(""),
  function (err) {}
);
