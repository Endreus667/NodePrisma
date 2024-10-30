import { Prisma } from '@prisma/client'; // Importar do prisma client
import { prisma } from '../libs/prisma'; // Ajustar o caminho, se necessário

export const createUser = async (data: Prisma.UserCreateInput) => { // Corrigido o tipo
    try {
        const user = await prisma.user.create({ data });
        return user;
    } catch (error) {
        console.error('Error creating user:', error); // Adicionei um log de erro
        return false;
    }
};
