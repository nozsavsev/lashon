import { Word } from '@prisma/client'
import { equal } from 'assert';
import fs from 'fs'
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient();
    const root = await prisma.root.findFirst({
        where: {
            root: {
                equals: req.query.root || "" as string
            }
        }
    });

    if (root) {
        const words = await prisma.word.findMany({
            where: {
                rootId: root?.id
            }
        });
        return res.status(200).json(words)
    }
    else
        return res.status(404).json([])

}