export default {
    name: 'Add/Remove',
    iterations: 1000,
    setup(ctx) {
        ctx.setup();
    },
    perform(ctx) {
        const entity = ctx.createEntity();

        ctx.addPositionComponent(entity);
        ctx.addVelocityComponent(entity);

        ctx.updateMovementSystem();

        ctx.removePositionComponent(entity);

        ctx.updateMovementSystem();

        ctx.removeVelocityComponent(entity);

        ctx.updateMovementSystem();

        ctx.destroyEntity(entity);
    },
};
