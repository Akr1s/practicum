import { Request, Response } from 'express';
import { STATUS_CODES } from '../constants/statusCodes';
import { getDataFromDatabase, handleDatabaseQuery } from '../helpers/common';
import { v4 as uuidv4 } from 'uuid';

const getAllSubjects = (req: Request, res: Response) => {
    const options = {
        query: 'SELECT * FROM LESSONS',
        errorCode: STATUS_CODES.ERROR,
        single: false,
    };

    getDataFromDatabase(options, res);
};

const createSubject = (req: Request, res: Response) => {
    let { name } = req.body;
    const id = uuidv4();
    const options = {
        query: `INSERT INTO LESSONS(ID,NAME) VALUES ('${id}','${name}') RETURNING *`,
        successStatusCode: STATUS_CODES.CREATED,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

const updateSubject = (req: Request, res: Response) => {
    const { id } = req.params;
    let { name } = req.body;
    const options = {
        query: `UPDATE LESSONS SET NAME='${name}' WHERE ID='${id}' RETURNING *`,
        successStatusCode: STATUS_CODES.OK,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

const deleteSubject = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `DELETE FROM LESSONS WHERE ID='${id}' RETURNING *`,
        successStatusCode: STATUS_CODES.OK,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

export default { getAllSubjects, createSubject, updateSubject, deleteSubject };
