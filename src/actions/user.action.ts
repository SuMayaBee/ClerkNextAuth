"use server"

import User from "@/models/user.model"
import { connect } from "@/db"

export async function createUser(data: any) {
    try{
        await connect()
        const newUser = await User.create(data)
        return JSON.parse(JSON.stringify(newUser))

    } catch(error) {
        console.log(error)
    }

}