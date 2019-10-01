const Query = {
    cafes: async (root, args, context, info) => {
        return await context.prisma.cafes()
    },
};

module.exports = Query;