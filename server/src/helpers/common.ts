import { databaseQuery } from '../config/database';
import { Response } from 'express';
import GetOptionsInterface from '../interfaces/getOptions';
import OptionsInterface from '../interfaces/options';
import { STATUS_CODES } from '../constants/statusCodes';

const getDataFromDatabase = async (options: GetOptionsInterface, res: Response) => {
    const { query, errorCode, single } = options;
    try {
        const { rows } = await databaseQuery(query);
        const data = single ? rows[0] : rows;
        res.status(STATUS_CODES.OK).send(data);
    } catch (error: any) {
        res.status(STATUS_CODES.ERROR).send(String(errorCode));
    }
};

const handleDatabaseQuery = async (options: any, res: Response) => {
    const { query, successStatusCode, errorStatusCode } = options;
    try {
        const { rows } = await databaseQuery(query);
        res.status(successStatusCode).send(rows);
    } catch (error: any) {
        console.log('error', error);
        res.status(errorStatusCode).send(error);
    }
};

export { getDataFromDatabase, handleDatabaseQuery };
