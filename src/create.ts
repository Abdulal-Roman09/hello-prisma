import { prisma } from './lib/prisma'

async function main() {

    // Create a new user with a post

    const user = await prisma.user.create({
        data: {
            username: 'noman',
            email: 'noman3@gamil.com',
            role: "user"

        },
    })

    const getallUser = await prisma.user.findMany()
    console.log('all user:', getallUser)

}
main()

