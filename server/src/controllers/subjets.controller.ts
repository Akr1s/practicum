import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../constants/statusCodes';
import { getDataFromDatabase } from '../helpers/common';

const getAllSubjects = (req: Request, res: Response) => {
    res.send('Routes work!');
    // const options = {
    //     query: 'SELECT * FROM CATEGORIES ORDER BY CREATED_DATE ASC',
    //     errorCode: STATUS_CODES.ERROR,
    //     single: false,
    // };
    // getDataFromDatabase(options, res);
};

export default { getAllSubjects };
