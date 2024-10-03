const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

function removeLogs() {
    try {
        if (fs.existsSync(logsDir)) {
            const files = fs.readdirSync(logsDir);

            if (files.length > 0) {
                console.log('Files to delete:');
                files.forEach((file) => {
                    console.log(`Deleting file: ${file}`);
                    fs.unlinkSync(path.join(logsDir, file));
                });
            }
            fs.rmdirSync(logsDir);
            console.log('Logs directory removed.');
        } else {
            console.log('Logs directory does not exist.');
        }
    } catch (error) {
        console.error('Error removing log files: ', error);
    }
}

removeLogs();
