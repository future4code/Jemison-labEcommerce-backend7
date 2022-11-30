import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../type";


export default async function getAllCharacters(
    req:Request,
    resp:Response
):Promise<void>{

    try {
        const name = req.query

        //const result: character[] = await connection.raw("SELECT * FROM character")
        //res.send(result[0])

        const characters: character[] = await connection("character")

        resp.send(characters  )
    } catch (error) {
        resp.status(500).send("Unexpected server error")
    }
}