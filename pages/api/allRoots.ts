import { Word } from '@prisma/client'
import fs from 'fs'
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient();



    await prisma.word.findMany({}).then(async (words) => {


        for (let word of words) {

            (`updating ${words.indexOf(word)} of ${words.length - 1}`)

            word.meaning.join(',');

            word.meaning = word.meaning.filter(i => (i !== "," && i !== " " && i !== ";" && i !== ""));

            (word.meaning)

            await prisma.word.update({
                where: {
                    id: word.id
                },
                data: {
                    meaning: word.meaning,
                }
            })
        }
    })


    //const roots = await prisma.root.findMany({});

    return res.status(200)//.json(roots)

}