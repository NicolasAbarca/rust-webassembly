import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import Bundler from 'parcel-bundler';

const app = express();

const { CLIENT_ENTRY_POINT, EXPRESS_PORT } = process.env;
const entryFiles = path.join(__dirname, CLIENT_ENTRY_POINT);
const bundler = new Bundler(entryFiles, {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bundler.middleware());

app.listen(EXPRESS_PORT, () => console.log(`Server up in ${ EXPRESS_PORT }`));
