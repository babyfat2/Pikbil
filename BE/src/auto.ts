import prisma from "./lib/prisma";

export  async function updateDataInDB() {
    const checkout = await prisma.checkout.updateMany({
        where: {
            status: "Complete",
        },
        data: {
            status: "Completed",
        }
    })
    console.log("checkout update");
}