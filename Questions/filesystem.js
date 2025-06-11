class FileSystem {
  constructor() {
    this.directory = { root: {} };
    this.currDirectory = this.directory["root"];
    this.currDirectoryPath = "root";
  }

  createNewDirectory(name) {
    this.currDirectory[name] = {};
  }

  changeDirectory(path) {
    this.currDirectory = this.changeDirectoryHelper(path);
    this.currDirectoryPath = path;
  }

  changeDirectoryHelper(path) {
    let paths = path.split("-");
    let current = this.directory;
    for (let key of paths) {
      current = current[key];
    }
    return current;
  }

  getCurrentDirectoryPath() {
    return this.currDirectoryPath;
  }

  getCurrentDirectory() {
    return this.currDirectory;
  }

  addFile(filename) {
    if (this.currDirectory.files) {
      this.currDirectory.files.push(filename);
    } else {
      this.currDirectory["files"] = [filename];
    }
    return true;
  }

  deleteFile(filename) {
    if (this.currDirectory.files.length > 0) {
      this.currDirectory.files = this.currDirectory.files.filter(
        (ele) => ele !== filename
      );
    }
    return true;
  }

  deleteDirectory(name) {
    delete this.currDirectory[name];
  }

  getRootDirectory() {
    return this.directory;
  }
}

const fs = new FileSystem();
fs.createNewDirectory("Joginder");
fs.changeDirectory("root-Joginder");
fs.addFile("index.html");
fs.addFile("app.js");
console.log(JSON.stringify(fs.getRootDirectory()));
