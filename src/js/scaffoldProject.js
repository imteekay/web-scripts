const CURRENT_DIR = process.cwd();
const ENCODING = 'utf8';

function createFile({ filePath, projectPath, file }) {
  const contents = fs.readFileSync(filePath, ENCODING);
  const writePath = `${CURRENT_DIR}/${projectPath}/${file}`;
  fs.writeFileSync(writePath, contents, ENCODING);
}

function createDirectory({ templatePath, projectPath, file }) {
  fs.mkdirSync(`${CURRENT_DIR}/${projectPath}/${file}`);
  scaffoldProject(`${templatePath}/${file}`, `${projectPath}/${file}`);
}

function createFiles({ filesToCreate, templatePath, projectPath }) {
  filesToCreate.forEach((file) => {
    const filePath = `${templatePath}/${file}`;
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      createFile({ filePath, projectPath, file });
    }

    if (stats.isDirectory()) {
      createDirectory({ templatePath, projectPath, file });
    }
  });
}

function scaffoldProject(templatePath, projectPath) {
  const filesToCreate = fs.readdirSync(templatePath);
  createFiles({ filesToCreate, templatePath, projectPath });
}
