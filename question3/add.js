const fs = require('fs'); // Synchronous version of fs methods
const path = require('path');

const log_dir = path.join(process.cwd(), 'Logs');

// Function to create log files synchronously
function createLogsSync() {
  try {
    if (!fs.existsSync(log_dir)) {
      fs.mkdirSync(log_dir, { recursive: true });
      console.log('Created logs directory!');
    }

    for (let i = 1; i <= 10; i++) {
      const fileName = path.join(log_dir, `Log${i}.txt`);
      const fileContent = `This is the log file and it is number ${i} log file.`;

      fs.writeFileSync(fileName, fileContent);
      console.log(`Log file ${i}.txt created!`);
    }
  } catch (error) {
    console.error('Error creating log files: ', error);
  }
}

createLogsSync();
