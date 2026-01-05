import { app } from "./app";
import { prisma } from "./lib/prisma"


const PORT = process.env.PORT || 3000;
async function main() {
    try {
        await prisma.$connect();
        console.log('connected to the database');
        app.listen(PORT, () => {
            console.log('Server is running on http://localhost:' + PORT);
        });
    } catch (er) {
        console.log(er);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main();