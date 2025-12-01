import { prisma } from './lib/prisma'

async function main() {

    // Create a new user with a post

    // const user = await prisma.user.create({
    //     data: {
    //         username: 'noman',
    //         email: 'noman3@gamil.com',
    //         role: "user"

    //     },
    // })

    // const getallUser = await prisma.user.findMany()
    // console.log('all user:', getallUser)


    // create profile
    // const createPofile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio",
    //         userId: 1
    //     }
    // })
    // const createCatagory = await prisma.category.create(
    //     {

    //         data: {
    //             name: "nextjs"
    //         }
    //     }
    // )
    const createPost = await prisma.post.create({
        data: {
            title: "this is title",
            content: "this is the post of the contenets",
            authorId: 1,
            postCategory: {
                create: {
                    category: {
                        connect: { id: 1 }
                    }
                }
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost)


}
main()

