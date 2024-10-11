import { Request, Response } from 'express';
import UserService from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
    const response = await UserService.createUser(req.body);
    res.json(response);
};

export const getUsers = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { role } = req.query;
    const response = await UserService.getUsers(id ? parseInt(id) : undefined, role as string);
    res.json(response);
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await UserService.updateUser(parseInt(id), req.body);
    res.json(response);
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await UserService.deleteUser(id ? parseInt(id) : undefined);
    res.json(response);
};
