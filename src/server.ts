import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { logger } from './logger';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 1234;

const credentials = {
  key: fs.readFileSync(path.join('sslcert', 'techqila.key'), 'utf8'),
  cert: fs.readFileSync(path.join('sslcert', 'techqila.crt'), 'utf8'),
}

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT, () => {
  logger.info(`Running http on port ${PORT}`);
});

httpsServer.listen(9443, () => {
  logger.info(`Running http on port 9443`);
});
