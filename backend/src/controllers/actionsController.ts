import { Request, Response } from 'express';

export class ActionController {
    static async create(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Created!' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getActions(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Actions' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async parseFile(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Parse' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async createFile(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Create' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
