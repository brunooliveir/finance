/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export function validateEnvVars(): void {
  validEnvVars(REQUIRED_ENV_VARS);
}

function validEnvVars(envVars: string[]): void {
  envVars.forEach((envVar) => {
    const val = process.env[envVar];
    if (val === '' || val === null || val === undefined) {
      throw new Error(`Required ENV VAR not set: ${envVar}`);
    }
  });
}

const REQUIRED_ENV_VARS = [
  'HOST_DB',
  'PORT_DB',
  'USER_DB',
  'PASS_DB',
  'NAME_DB',
  'NODE_ENV',
];

export const NODE_ENV = process.env.NODE_ENV;
export const HOST_DB = process.env.HOST_DB;
export const PORT_DB = Number(process.env.PORT_DB);
export const USERNAME_DB = process.env.USER_DB;
export const PASSWORD_DB = process.env.PASS_DB;
export const NAME_DB = process.env.NAME_DB;
