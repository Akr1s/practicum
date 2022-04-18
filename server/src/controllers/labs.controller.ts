import { Request, Response } from 'express';
import { STATUS_CODES } from '../constants/statusCodes';
import { getDataFromDatabase, handleDatabaseQuery } from '../helpers/common';

const getAllLaboratories = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `SELECT * FROM LABS ORDER BY ID ASC`,
        errorCode: STATUS_CODES.ERROR,
        single: false,
    };

    getDataFromDatabase(options, res);
};

const getSingleLaboratory = (req: Request, res: Response) => {
    const { id } = req.params;
    const options = {
        query: `SELECT * FROM LABS WHERE ID='${id}'`,
        errorCode: STATUS_CODES.ERROR,
        single: true,
    };

    getDataFromDatabase(options, res);
};

const updateLaboratory = (req: Request, res: Response) => {
    const { id } = req.params;
    let { name, data } = req.body;
    const options = {
        query: {
            text: `UPDATE LABS SET NAME = $1, DATA = $2 WHERE ID = $3 RETURNING *`,
            values: [name, JSON.stringify(data), id],
        },
        successStatusCode: STATUS_CODES.OK,
        errorStatusCode: STATUS_CODES.ERROR,
    };
    handleDatabaseQuery(options, res);
};

export default {
    getAllLaboratories,
    updateLaboratory,
    getSingleLaboratory,
};
