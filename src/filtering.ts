import { prisma } from "./lib/prisma"


const filtering = async () => {

    // and filtering

    // const andfiltering = await prisma.post.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 title: {
    //                     contains: "title"
    //                 }
    //             },
    //             {
    //                 published: false
    //             }
    //         ]
    //     }
    // })
    // console.log(andfiltering)

    // or filtering

    // const orfiltering = await prisma.post.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 title: {
    //                     contains: "title"
    //                 }
    //             },
    //             {
    //                 published: false
    //             }
    //         ]
    //     }
    // })
    // console.log(orfiltering)

    // not filtering 
    // const notFiltering = await prisma.post.findMany({
    //     where: {
    //         NOT: [
    //             {
    //                 title: {
    //                     contains: "title"
    //                 }
    //             }
    //         ]
    //     }
    // })
    // console.log(notFiltering)


    // start with
    const startWithFiltering = await prisma.user.findMany({
        where: {
            email: {
                startsWith: "com"
            }
        }

    })
    console.log(startWithFiltering)

    // end with
    const endWithFiltering = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "title"
            }
        }

    })
    console.log(endWithFiltering)
    // end with
    const equalFiltering = await prisma.user.findMany({
        where: {
            email: {
                equals: "title"
            }
        }

    })
    console.log(equalFiltering)
}
filtering()