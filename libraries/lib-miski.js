import { createWorld } from 'miski';

export default {
    name: 'miski',
    setup() {
        this.world = createWorld();

        this.position = this.world.registerComponent({
          name: "Position",
          defaults: {
            x: 0,
            y: 0,
          }
        });

        this.velocity = this.world.registerComponent({
          name: "Velocity",
          defaults: {
            dx: 1.2,
            dy: 1.7,
          }
        });

        this.query = this.world.registerQuery({
          all: [this.position, this.velocity],
        }),

        this.system = this.world.registerSystem({
          name: "Movement",
          query: this.query,
          update: (entities, _dt) => {
            entities.forEach((entity) => {
              const velocity = entity.Velocity;
              const position = entity.Position;

              position.x += velocity.dx;
              position.y += velocity.dy;
            });
          },
        });
        this.system.enable();
    },
    createEntity() {
        const entity = this.world.createEntity();
        entity.enable();
        return entity;
    },
    addPositionComponent(entity) {
        entity.addComponent(this.position);
    },
    addVelocityComponent(entity) {
        entity.addComponent(this.velocity);
    },
    removePositionComponent(entity) {
        entity.removeComponent(this.position);
    },
    removeVelocityComponent(entity) {
        entity.removeComponent(this.velocity);
    },
    destroyEntity(entity) {
        this.world.destroyEntity(entity);
    },
    cleanup() {
        this.world = null;
    },
    updateMovementSystem() {
        this.world.step();
    },
    geMovementSystemUpdateCount() {
        return this.world.updatesTotal;
    },
};
