const Mutations = {
    createCafe: async (root, args, context) => {
        return await context.prisma.createCafe({
            name: args.name,
            city: args.city,
            address: args.address,
        })
    },
    deleteCafe: async (root, args, context) => {
        return await context.prisma.deleteCafe({
            id: args.id
        })
    },
};

module.exports = Mutations;