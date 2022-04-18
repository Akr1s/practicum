import { Request, Response } from 'express';
import { STATUS_CODES } from '../constants/statusCodes';
import { getDataFromDatabase, handleDatabaseQuery } from '../helpers/common';
import { v4 as uuidv4 } from 'uuid';
import convertDate from '../utils/convertDate';

const getAllLaboratories = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `SELECT * FROM LABORATORIES WHERE LESSON_ID='${id}' ORDER BY CREATED_DATE ASC`,
        errorCode: STATUS_CODES.ERROR,
        single: false,
    };

    getDataFromDatabase(options, res);
};

const getSingleLaboratory = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `SELECT * FROM LABORATORIES WHERE ID='${id}'`,
        errorCode: STATUS_CODES.ERROR,
        single: true,
    };

    getDataFromDatabase(options, res);
};

const createLaboratory = (req: Request, res: Response) => {
    let { name, data, lessonId } = req.body;
    const id = uuidv4();
    const options = {
        query: `INSERT INTO LABORATORIES(ID,NAME, LESSON_ID, DATA, CREATED_DATE) VALUES ('${id}','${name}', '${lessonId}', '${JSON.stringify(
            data,
        )}', '${convertDate(new Date())}') RETURNING *`,
        successStatusCode: STATUS_CODES.CREATED,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

const updateLaboratory = (req: Request, res: Response) => {
    const { id } = req.params;
    let { name, data, lessonId } = req.body;
    const options = {
        query: {
            text: `UPDATE LABORATORIES SET NAME = $1, DATA = $2 WHERE ID = $3 RETURNING *`,
            values: [name, JSON.stringify(data), id],
        },
        successStatusCode: STATUS_CODES.OK,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

const deleteLaboratory = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `DELETE FROM LABORATORIES WHERE ID='${id}' RETURNING *`,
        successStatusCode: STATUS_CODES.OK,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

export default {
    getAllLaboratories,
    createLaboratory,
    updateLaboratory,
    deleteLaboratory,
    getSingleLaboratory,
};
