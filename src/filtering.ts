import { prisma } from "./lib/prisma"


const filtering = async () => {

    // and filtering

    const andfiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: false
                }
            ]
        }
    })
    console.log(andfiltering)

    // or filtering

    const orfiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: false
                }
            ]
        }
    })
    console.log(orfiltering)
}
filtering()