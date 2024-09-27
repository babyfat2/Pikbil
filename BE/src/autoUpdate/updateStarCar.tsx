import prisma from "../lib/prisma";


export async function updateStarCar() {
    console.log("🚀 ~ file: src/autoUpdate/updateStarCar");
    try {
        const carId = await prisma.car.findMany({
            select: {
                id: true,
            }
        });
        carId.forEach(async (e) => {
            const aggregations = await prisma.comment.aggregate({
                _avg: {
                    star: true,
                },
                where: {
                    carId: e.id,
                }
            })
            const updateCar = await prisma.car.update({
                data: {
                    avgStar: aggregations._avg.star,
                },
                where: {
                    id: e.id,
                }
            })
        })
    } catch (e: any) {
        console.log(e);
    }
}