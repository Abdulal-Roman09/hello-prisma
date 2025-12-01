import { prisma } from "./lib/prisma"


const relationalQuerys = async () => {

    // fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).posts()
    // console.log(result)

    // include api with different way
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }, include: {
    //         posts: true,

    //     }
    // })
    // console.log(result)

}
relationalQuerys()