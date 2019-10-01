const Mutations = {
    createCafe: (root, args, context) => {
        return context.prisma.createCafe({
            name: args.name,
            city: args.city,
            address: args.address,
        })
    },
};

module.exports = Mutations;