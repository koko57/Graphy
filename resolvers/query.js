const Query = {
    cafes: (root, args, context, info) => {
        return context.prisma.cafes()
    },
};

module.exports = Query;