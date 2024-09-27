import prisma from "../lib/prisma";

export async function updateStatusCheckout() {
    console.log("🚀 ~ file: src/autoUpdate/updateStarCheckout");
    try {
        const checkout = await prisma.checkout.findMany({
            select: {
                id: true,
                dateRent: true,
                status: true,
            }
        });
        checkout.forEach(async (e) => {
            const datenow = new Date();
            console.log(datenow)
            if (e.dateRent >= datenow && e.status === "Ongoing") {
                const updateCheckout = await prisma.checkout.update({
                    where: {
                        id: e.id,
                    },
                    data: {
                        status: "Completed",
                    }
                })
            }
        })
    } catch (e: any) {
        console.log(e);
    }
}