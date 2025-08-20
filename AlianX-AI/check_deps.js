const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// --- Node dependencies ---
const packageJsonPath = path.join(__dirname, 'package.json');
let nodeDeps = [];

if (fs.existsSync(packageJsonPath)) {
  const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  nodeDeps = Object.keys(packageData.dependencies || {});
} else {
  console.warn('⚠️ package.json not found. Skipping Node dependencies check.');
}

// Check and install missing Node dependencies
nodeDeps.forEach(dep => {
  try {
    require.resolve(dep);
    console.log(`✅ Node dependency '${dep}' is installed.`);
  } catch (err) {
    console.log(`⚠️ Node dependency '${dep}' not found. Installing...`);
    exec(`npm install ${dep}`, (error, stdout, stderr) => {
      if (error) return console.error(`❌ Failed to install ${dep}: ${error.message}`);
      if (stderr) console.error(stderr);
      console.log(`✅ Installed ${dep}`);
    });
  }
});

// --- Python dependencies ---
const requirementsPath = path.join(__dirname, 'requirements.txt');
if (fs.existsSync(requirementsPath)) {
  const pythonDeps = fs.readFileSync(requirementsPath, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'));

  pythonDeps.forEach(dep => {
    exec(`pip show ${dep}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`⚠️ Python dependency '${dep}' not found. Installing...`);
        exec(`pip install ${dep}`, (err, out, errOut) => {
          if (err) return console.error(`❌ Failed to install ${dep}: ${err.message}`);
          console.log(`✅ Installed Python dependency '${dep}'`);
        });
      } else {
        console.log(`✅ Python dependency '${dep}' is installed.`);
      }
    });
  });
} else {
  console.warn('⚠️ requirements.txt not found. Skipping Python dependencies check.');
}
