import { Word } from '@prisma/client'
import fs from 'fs'
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient();
    const roots = await prisma.root.findMany({});

    return res.status(200).json(roots)

}