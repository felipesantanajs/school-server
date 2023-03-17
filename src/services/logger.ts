import fs from 'fs';

export function log(message: string): void {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFile('notifications.log', logMessage, (err) => {
    if (err) {
      console.error(`Error writing to log: ${err}`);
    }
  });
}